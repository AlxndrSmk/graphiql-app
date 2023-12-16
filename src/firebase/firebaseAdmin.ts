import * as firebaseAdmin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const projectId = process.env.NEXT_PUBLIC_FB_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

if (!privateKey || !projectId || !clientEmail) {
  throw new Error(
    `Firebase connection misconfigured. Please review the README to properly establish Firebase connection using environment variables.`
  );
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: privateKey ? privateKey.replace(/\\n/gm, '\n') : undefined,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  });
}

export { firebaseAdmin };
