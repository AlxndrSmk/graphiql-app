import * as Yup from 'yup';
import { User, UserCredential } from 'firebase/auth';
import { schema } from '@/validation/validationSchema';
import { Dispatch, SetStateAction } from 'react';

export type TButton = {
  text?: string;
  onClick: () => void;
  img?: JSX.Element;
  onHoverText?: string;
  isTooltip?: boolean;
  isDisabled?: boolean;
  className?: string;
};

export interface AuthButtonProps {
  text: string;
  onClick?: () => void;
  type?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: {
    alt: string;
    size: number;
    src: string;
  };
}

export interface EmailAndPasswordProps {
  email: string;
  password: string;
}

export interface CustomError {
  code: string;
  message: string;
}

export interface AuthViewProps {
  authCallback: (email: string, password: string) => Promise<UserCredential>;
  page?: 'SIGN_IN' | 'SIGN_UP';
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
  mainPageLink: string;
  signIn: string;
  signUp: string;
  signOut: string;
  email: string;
  password: string;
  incorrect: string;
  haveAccount: string;
  signUpHere: string;
  signInHere: string;
  signOr: string;
  signToWelcome: string;
  signUpTitle: string;
  alreadyRegistered: string;
  alreadyExists: string;
  title: string;
  desc: string;
  descGrLink: string;
  descRs: string;
  emailRequired: string;
  emailValid: string;
  emailDomain: string;
  passwordRequired: string;
  passwordLength: string;
  passwordDigit: string;
  passwordLetter: string;
  passwordCharacters: string;
}

export interface LangContext {
  en: LangConstants;
  ru: LangConstants;
  pageLang: string;
  setPageLang: (lang: string) => void;
  getConstants: () => LangConstants;
}

export interface TeamData {
  en: Array<TeamMember>;
  ru: Array<TeamMember>;
}

export interface TeamMember {
  name: string;
  img: string;
  desc: string;
  github: string;
}

export type FirebaseConfig = {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
};

export interface Cookies {
  [key: string]: string;
}

export interface SignInFieldProps {
  id: string;
  label: string;
  type: string;
  register: object;
  placeholder: string;
  error: string | undefined;
  handlePasswordVisibility?: () => void;
  isVisible?: boolean;
}

export type TSize = {
  width: number;
  height: number;
};

export interface ErrorBoundaryState {
  hasError: boolean;
  error: null | Error;
}

export interface LinkButtonProps {
  alt: string;
  size: number;
  src: string;
  href: string;
  text: string;
  isVisible?: boolean;
}

export type BurgerButtonProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export interface CustomHeaders {
  [key: string]: string;
}

export interface Variables extends CustomHeaders {}

export interface GQLQueryBody {
  operationName: string | null;
  variables: Variables | object;
  query: string;
}
export interface GQLArguments {
  url: string;
  headers?: CustomHeaders;
  body: GQLQueryBody;
}

export interface PrettierArgs {
  args: GQLArguments;
  errors: Array<string> | null;
}

export interface TabsProps {
  variables: string;
  headers: string;
  setVariables: Dispatch<SetStateAction<string>>;
  setHeaders: Dispatch<SetStateAction<string>>;
}

export interface MainNavProps {
  setShowEndpoint: Dispatch<SetStateAction<boolean>>;
}

export interface EndpointProps extends MainNavProps {
  isShowEndpoint: boolean;
}

export type TEditor = {
  type: 'json' | 'query';
  isShow: boolean;
  isTablet: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setStateData: Dispatch<SetStateAction<string>>;
  stateData: string;
  isShowEndpoint: boolean;
  setShowEndpoint: Dispatch<SetStateAction<boolean>>;
};
