import * as Yup from 'yup';
import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { User, UserCredential } from 'firebase/auth';
import { schema } from '@/validation/validationSchema';
import storeApp from '@/redux/store/store';

export type TButton = {
  text?: string;
  onClick: (event: SyntheticEvent) => void;
  img?: React.ReactNode;
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
  details: string;
  prettify: string;
  run: string;
  doc: string;
  docErr: string;
  endpoint: string;
  setBtn: string;
  variables: string;
  headers: string;
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
  firstName: string;
  lastName: string;
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

export interface DeveloperCardProps {
  firstName: string;
  lastName: string;
  github: string;
  image: string;
  description: string;
  bgColor: string;
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

export type StoreMaker = ReturnType<typeof storeApp>;

export type StoreDispatcher = StoreMaker['dispatch'];

export type StoreType = ReturnType<StoreMaker['getState']>;

export type TDocType = {
  kind: string;
  name: string;
  description: string;
  fields: TDocField[] | null;
  inputFields: TDocArgs[] | null;
  interfaces: [];
  enumValues: null | TEnum[];
  possibleTypes: null;
};

type TEnum = {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: null;
};

export type TDocField = {
  name: string;
  description: string;
  args: TDocArgs[];
  type: TDocOfType | null;
  isDeprecated: boolean;
  deprecationReason: null;
};

export type TDocOfType = {
  kind: string;
  name: string | null;
  ofType: null | TDocOfType;
};

export type TDocArgs = {
  name: string;
  description: string;
  type: {
    kind: string;
    name: string | null;
    ofType: TDocOfType | null;
  };
  defaultValue: string | null;
};

export type TDoc = {
  data: {
    __schema: {
      queryType: {
        name: string;
      };
      mutationType?: null;
      subscriptionType?: null;
      types: TDocType[];
      // directives: [];
    };
  };
};

export type TObjectTypeProps = {
  types: TDocType;
  handleBtnClick: (str: string) => void;
};

export type TBreadCrumbProps = {
  breadCrumb: string[];
  types: TDocType[];
  setBreadCrumb: Dispatch<SetStateAction<string[]>>;
  setQueryData: Dispatch<SetStateAction<TDocType[]>>;
};

export type TDocProp = {
  res: TDoc | undefined;
};
