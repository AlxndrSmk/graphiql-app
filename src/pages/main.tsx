import { useEffect } from 'react';
import Router from 'next/router';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/AuthProvider';

const Main: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user == null) {
      Router.push(ROUTES.SIGN_IN);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return <h1>MAIN PAGE</h1>;
};

export default Main;
