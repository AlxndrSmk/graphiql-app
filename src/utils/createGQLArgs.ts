import { GQLArguments, GQLQueryBody, PrettierArgs } from '@/types/types';
import { prettify } from './prettify';

const stringPrepareToParse = (value: string): string => {
  const prettyValue = value.replaceAll(/\n|\s/g, '');
  return prettyValue.replaceAll(/'/g, '"');
};

const createGQLArgs = (
  query: string,
  variables: string,
  headers: string,
  urlServer?: string
): PrettierArgs => {
  const body: GQLQueryBody = {
    operationName: null,
    query: '',
    variables: {},
  };
  const argsGQL: GQLArguments = {
    url: urlServer ? urlServer : '',
    body: body,
    headers: {},
  };

  const prettierQuery = (query: string): string => {
    if (!query) return 'Empty query';
    const prettyQuery = prettify(query);

    const indexFirstQuote = prettyQuery.indexOf('{');
    const indexOfFirstSpace = prettyQuery.indexOf(' ');
    let nameQuery = prettyQuery.slice(
      indexOfFirstSpace + 1,
      indexFirstQuote - 1
    );

    if (nameQuery.includes('(')) {
      const indexOfBracket = nameQuery.indexOf('(');
      nameQuery = nameQuery.slice(0, indexOfBracket);
    }

    argsGQL.body.operationName = nameQuery ? nameQuery : 'null';
    argsGQL.body.query = prettyQuery;

    return 'Done';
  };

  const prettierVariables = (variables: string): string => {
    if (!variables) return 'Empty';

    const prettyVariables = stringPrepareToParse(variables);

    try {
      argsGQL.body.variables = JSON.parse(prettyVariables);
    } catch {
      return 'Wrong variables';
    }

    return 'Done';
  };

  const prettierHeaders = (headers: string): string => {
    if (!headers) return 'Empty';

    const prettyHeaders = stringPrepareToParse(headers);
    try {
      argsGQL.headers = JSON.parse(prettyHeaders);
      return 'Done';
    } catch (e) {
      return 'Wrong headers';
    }
  };

  const resultsOperation: Array<string> = [
    prettierQuery(query),
    prettierVariables(variables),
    prettierHeaders(headers),
  ];

  const result: Array<string> = resultsOperation.filter(
    (item: string) => item !== 'Done' && item !== 'Empty'
  );

  return {
    args: argsGQL,
    errors: result.length ? result : null,
  };
};

export default createGQLArgs;
