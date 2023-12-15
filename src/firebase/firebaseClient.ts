import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  addDoc,
  collection,
  Firestore,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  Auth,
  UserCredential,
} from 'firebase/auth';
import { EmailAndPasswordProps, FirebaseConfig } from '@/types/types';

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

const getFirebaseApp: (config?: {}) => FirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch (e) {
    return initializeApp(config);
  }
};

const firebase: FirebaseApp = getFirebaseApp(firebaseConfig);
const db: Firestore = getFirestore(firebase);
const auth: Auth = getAuth(firebase);

const registerWithEmailAndPassword = async ({
  email,
  password,
}: EmailAndPasswordProps): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password).then(
    async (res) => {
      await addDoc(collection(db, 'users'), {
        id: res.user.uid,
        email,
      });

      return res;
    }
  );
};

const logInWithEmailAndPassword = async ({
  email,
  password,
}: EmailAndPasswordProps): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = async (): Promise<void> => {
  signOut(auth);
};

setPersistence(auth, browserSessionPersistence);

export {
  firebase,
  db,
  auth,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
};
