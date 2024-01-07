import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

import SignUpController from '@/components/AuthBlock/SignUpController';
import { ROUTES } from '@/constants/routes';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';
import { registerWithEmailAndPassword } from '@/firebase/firebaseClient';
import { Cookies } from '@/types/types';
import { UserCredential } from 'firebase/auth';

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
