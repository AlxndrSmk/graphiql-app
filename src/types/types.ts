import * as Yup from 'yup';
import { UserCredential } from 'firebase/auth';
import { schema } from '@/validation/validationSchema';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

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

export interface CustomError {
  code: string;
  message: string;
}

export interface AuthViewProps {
  authCallback: (email: string, password: string) => Promise<UserCredential>;
  page: 'SIGN_IN' | 'SIGN_UP';
}

export type UserData = {
  id: string;
  email: string;
};

export interface EmailAndPasswordProps {
  email: string;
  password: string;
}

export interface PageContainerProps {
  children: React.ReactNode;
}

export interface AuthViewProps {
  authCallback: (email: string, password: string) => Promise<UserCredential>;
}

export interface CustomError {
  code: string;
  message: string;
}

export type schemaType = Yup.InferType<typeof schema>;
