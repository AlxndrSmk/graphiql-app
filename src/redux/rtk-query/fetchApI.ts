import { createApi } from '@reduxjs/toolkit/query/react';
import introspectionQuery from '@/constants/introspection-query';
import { GQLArguments } from '@/types/types';
import dynamicBaseQuery from './dinamicBaseQuery';

export const graphQLApi = createApi({
  reducerPath: 'GraphQL',
  baseQuery: dynamicBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/graphql',
  }),
  endpoints: (build) => ({
    getIntrospection: build.query({
      query: (arg?: GQLArguments): GQLArguments => ({
        url: !arg!.url ? 'https://rickandmortyapi.com/graphql' : arg!.url,
        headers: { Warning: 'RSHeroes' },
        body: {
          operationName: 'IntrospectionQuery',
          variables: {},
          query: introspectionQuery,
        },
      }),
    }),
    getGQLResponse: build.query({
      query: (arg: GQLArguments): GQLArguments => ({
        url: arg.url,
        headers: arg.headers,
        body: arg.body,
      }),
    }),
  }),
});

export const { useGetIntrospectionQuery, useLazyGetGQLResponseQuery } =
  graphQLApi;
