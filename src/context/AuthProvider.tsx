import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import Router from 'next/router';

import nookies from 'nookies';
import _default from 'nookies';
import { ParsedToken, User } from 'firebase/auth';
import { auth } from '@/firebase/firebaseClient';
import { parseJWT } from '@/utils/parseJWT';
import { AuthContextProps } from '@/types/types';
import { ROUTES } from '@/constants/routes';

declare global {
  interface Window {
    nookies: typeof _default;
  }
}

const initContextValues = {
  user: null,
  expirationTime: 0,
};

const AuthContext = createContext<AuthContextProps>(initContextValues);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expirationTime, setExpirationTime] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.nookies = nookies;
    }

    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        setIsLoading(false);
        return;
      }

      const token: string = await user.getIdToken();
      const parsedToken: ParsedToken = parseJWT(token);
      const currentDate = new Date().getTime();
      const expirationDate = +`${parsedToken.exp}000`;
      const timeToLogout = expirationDate - currentDate;
      setExpirationTime(timeToLogout);

      if (currentDate > expirationDate) {
        Router.push(ROUTES.WELCOME);
      }

      setUser(user);
      setIsLoading(false);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
    });
  }, []);

  return (
    <>
      {!isLoading && (
        <AuthContext.Provider value={{ user, expirationTime }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
