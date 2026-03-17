const langLocalStorage = (lang: string | null): string => {
  const langStorage = localStorage.getItem('lang');

  if (!langStorage) {
    localStorage.setItem('lang', lang ? lang : 'en');
    return 'en';
  }

  if (!lang) {
    return langStorage;
  }

  if (langStorage !== lang) {
    localStorage.setItem('lang', lang);
    return lang;
  }

  return langStorage;
};

export default langLocalStorage;
