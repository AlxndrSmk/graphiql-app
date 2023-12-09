import { UserCredential } from 'firebase/auth';

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export type UserData = {
  id: string;
  email: string;
};

export interface EmailAndPasswordProps {
  email: string;
  password: string;
}

export interface AuthProviderProps {
  children: JSX.Element;
}

export interface PageContainerProps {
  children: React.ReactNode;
}

export interface AuthViewProps {
  authCallback: (email: string, password: string) => Promise<UserCredential>;
  // page: 'SIGN_IN' | 'SIGN_UP';
}

export interface CustomError {
  code: string;
  message: string;
}
