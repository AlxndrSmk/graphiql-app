import LangConstants from "@/types/LangConstants";

interface LangContext {
  en: LangConstants;
  ru: LangConstants;
  pageLang: string;
  setPageLang: (lang: string) => void;
  getConstants: () => LangConstants;
}

export default LangContext;