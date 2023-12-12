import { NextRouter } from 'next/router';

const checkQueryParams = (router: NextRouter): string | null => {
  const params: URL = new URL('https://url.com' + router.asPath);

  const lang: string | null = params.searchParams.get('lang');

  if (!lang) return null;

  switch (lang) {
    case 'ru':
      return 'ru';
    case 'en':
      return 'en';
    default:
      return null;
  }
};

export default checkQueryParams;
