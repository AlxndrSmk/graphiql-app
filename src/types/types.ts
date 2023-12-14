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
