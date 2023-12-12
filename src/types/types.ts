import * as Yup from 'yup';
import { User, UserCredential } from 'firebase/auth';
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

export interface AuthContextProps {
  user: User | null;
  expirationTime: number;
}

export interface LangConstants {
  langButton: string;
  altLogo: string;
  textCreated: string;
  welcomePageLink: string;
  signInBtn: string;
  signUpBtn: string;
  toMainBtn: string;
}

export interface LangContext {
  en: LangConstants;
  ru: LangConstants;
  pageLang: string;
  setPageLang: (lang: string) => void;
  getConstants: () => LangConstants;
}

export interface PropsAuthButton {
  type: 'sign-in' | 'sign-up' | 'to-main';
}

export interface StylesOfButton {
  button: string;
  textButtonStyle: string;
  textButton: string;
}

export type URLsForRedirect = {
  pozdnyakoks: string;
  alxndrsmk: string;
  brbrov: string;
  rsschool: string;
};
