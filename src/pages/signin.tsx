import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { logInWithEmailAndPassword } from '@/firebase/firebaseClient';
import { ROUTES } from '@/constants/routes';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';
import SignInController from '@/components/AuthBlock/SignInController';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid } = token;

    return {
      redirect: {
        permanent: false,
        destination: ROUTES.MAIN,
      },
      props: {
        uid,
      },
    };
  } catch (err) {
    console.error('Error during authentication:', err);

    const stubData = {
      uid: '',
    };

    return {
      props: stubData,
    };
  }
};

const SignIn = () => {
  const onSignIn = async (email: string, password: string) => {
    return await logInWithEmailAndPassword({ email, password });
  };

  return <SignInController authCallback={onSignIn} page={'SIGN_IN'} />;
};

export default SignIn;
