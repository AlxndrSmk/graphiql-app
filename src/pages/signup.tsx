import nookies from 'nookies';
import { GetServerSidePropsContext } from 'next';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

import { registerWithEmailAndPassword } from '@/firebase/firebaseClient';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';
import { UserCredential } from 'firebase/auth';
import { ROUTES } from '@/constants/routes';
import SignUpController from '@/components/auth/SignUpController';
import { Cookies } from '@/types/types';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies: Cookies = nookies.get(ctx);
    const token: DecodedIdToken = await firebaseAdmin
      .auth()
      .verifyIdToken(cookies.token);
    const { uid }: { uid: string } = token;

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
    return {
      props: {},
    };
  }
};

const SignUp = () => {
  const onSignUp = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await registerWithEmailAndPassword({ email, password });
  };

  return <SignUpController authCallback={onSignUp} page={'SIGN_UP'} />;
};

export default SignUp;
