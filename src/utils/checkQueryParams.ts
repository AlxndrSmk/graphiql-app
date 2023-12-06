import { NextRouter } from 'next/router';
import QueryType from '@/types/QueryType';

function checkQueryParams(router: NextRouter): string | null {
  const query = router.query as QueryType;

  if (!query.lang) return null;

  switch (query.lang) {
    case 'ru':
      return 'ru';
    case 'en':
      return 'en';
    default:
      return null;
  }
}

export default checkQueryParams;
