const storeLangParam = (lang: string | null): string => {

  const savedLangInStorage: string | null = localStorage.getItem('lang');

  console.log(savedLangInStorage);

  if (!savedLangInStorage) {
    const checkedLang = lang ? lang : 'en';
    localStorage.setItem('lang', checkedLang);
    return checkedLang;
  }

  if (!lang) {
    return savedLangInStorage;
  }

  if (savedLangInStorage !== lang) {
    localStorage.setItem('lang', lang);
    return lang;
  }

  return savedLangInStorage;
}

export default storeLangParam;
