import { ParsedUrlQuery } from 'querystring';

interface QueryType extends ParsedUrlQuery {
  lang: string;
}

export default QueryType;
