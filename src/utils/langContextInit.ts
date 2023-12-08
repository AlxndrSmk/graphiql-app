import LangContext from '@/types/LangContext';
import LangConstants from '@/types/LangConstants';

const langContextInit: LangContext = {
  en: {
    langButton: 'EN',
    altLogo: 'RSSchool logo',
    textCreated: 'Created at',
    welcomePageLink: 'To welcome page',
  },
  ru: {
    langButton: 'RU',
    altLogo: 'RSSchool лого',
    textCreated: 'Дата создания',
    welcomePageLink: 'На страницу приветствия',
  },
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
