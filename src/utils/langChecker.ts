import { NextRouter } from 'next/router';
import { LangContext } from '@/types/types';
import checkQueryParams from '@/utils/checkQueryParams';
import langLocalStorage from '@/utils/langLocalStorage';

const langChecker = (router: NextRouter, context: LangContext) => {
  const lang: string | null = checkQueryParams(router);
  const checkedLang = langLocalStorage(lang);

  if (!lang) {
    router
      .replace(router.pathname + `?lang=${checkedLang}`)
      .then(() => context.setPageLang(checkedLang));
  } else {
    context.setPageLang(lang);
  }

  return checkedLang;
};

export default langChecker;
