export type TButton = {
  text?: string;
  onClick: () => void;
  img?: JSX.Element;
  onHoverText?: string;
  isTooltip?: boolean;
  className?: string;
};

export type TEditor = {
  editor: 'json' | 'query';
  text?: string;
};
import * as Yup from 'yup';
import { User, UserCredential } from 'firebase/auth';
import { schema } from '@/validation/validationSchema';

export interface AuthButtonProps {
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

//TODO not use!!!
// export interface AuthProviderProps {
//   children: JSX.Element;
// }

//TODO not use!!!
// export interface PageContainerProps {
//   children: React.ReactNode;
// }

export interface CustomError {
  code: string;
  message: string;
}

export interface AuthViewProps {
  authCallback: (email: string, password: string) => Promise<UserCredential>;
  page?: 'SIGN_IN' | 'SIGN_UP';
}

//TODO not use!!!
// export type UserData = {
//   id: string;
//   email: string;
// };

//TODO not used!!!
// export interface PageContainerProps {
//   children: React.ReactNode;
// }

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

//TODO not use!!!
// export interface PropsAuthButton {
//   type: "sign-in" | "sign-up" | "to-main";
// }

//TODO not use!!!
// export interface StylesOfButton {
//   button: string;
//   textButtonStyle: string;
//   textButton: string;
// }

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
