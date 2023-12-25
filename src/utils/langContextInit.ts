import { LangContext, LangConstants } from '@/types/types';
import engConstants from '@/locale/en';
import rusConstants from '@/locale/ru';

const langContextInit: LangContext = {
  en: engConstants,
  ru: rusConstants,
  pageLang: 'en',
  setPageLang: function (lang: string): void {
    this.pageLang = lang;
  },
  getConstants: function (): LangConstants {
    switch (this.pageLang) {
      case 'ru':
        return this.ru;
      case 'en':
        return this.en;
      default:
        return this.en;
    }
  },
};

export default langContextInit;
