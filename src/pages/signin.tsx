import SignInController from '@/components/AuthBlock/SignInController';
import { ROUTES } from '@/constants/routes';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';
import { logInWithEmailAndPassword } from '@/firebase/firebaseClient';
import { Cookies } from '@/types/types';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies: Cookies = nookies.get(ctx);
    const token: DecodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(cookies.token);
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
    return {
      props: {},
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
