import nookies from 'nookies';
import { GetServerSidePropsContext } from 'next';

import { registerWithEmailAndPassword } from '@/firebase/firebaseClient';
import { firebaseAdmin } from '@/firebase/firebaseAdmin';
import { ROUTES } from '@/constants/routes';
import SignUpController from '@/components/auth/sign-up/SignUp';

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
    const cookies = nookies.get(ctx);

    console.log('Token received:', cookies.token);

    // const stubData = {
    //   uid: '',
    // };

    return {
      props: {},
    };
  }
};

const SignUp = () => {
  const onSignUp = async (email: string, password: string) => {
    return await registerWithEmailAndPassword({ email, password });
  };

  return <SignUpController authCallback={onSignUp} page="SIGN_UP" />;
};

export default SignUp;
