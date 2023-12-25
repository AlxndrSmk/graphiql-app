import * as Yup from 'yup';
import { User, UserCredential } from 'firebase/auth';
import { schema } from '@/validation/validationSchema';
import { Dispatch, ReactNode, SetStateAction, SyntheticEvent } from 'react';

export type TButton = {
  text?: string;
  onClick(e: SyntheticEvent): void;
  img?: ReactNode;
  onHoverText?: string;
  isTooltip?: boolean;
  isDisabled?: boolean;
  className?: string;
};

//TODO TEditor
// export type TEditor = {
//   type: 'json' | 'query';
//   showRight: boolean;
//   setShowRight: Dispatch<SetStateAction<boolean>>;
//   responseText?: string;
//   setEditorValue?: Dispatch<SetStateAction<string | undefined>>;
//   operation(args?: PrettierArgs): void;
//   response: string;
// };

export type TEditorOld = {
  type: 'json' | 'query';
  showRight: boolean;
  setShowRight: Dispatch<SetStateAction<boolean>>;
  responseText?: string;
  setEditorValue?: Dispatch<SetStateAction<string | undefined>>;
  operation(args?: PrettierArgs): void;
  response: string;
};

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

export interface CMCType {
  valueView: string;
  readOnly: boolean;
  eventOnChange?(value: string): void;
}

export type TEditor = {
  type: 'json' | 'query';
  setStateData: Dispatch<SetStateAction<string>>;
  stateData: string;
};
