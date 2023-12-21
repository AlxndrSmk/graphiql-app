import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import introspectionQuery from '../../constants/introspection-query';
import { GQlArguments } from '../../types/types';

export const graphQLApi = createApi({
  reducerPath: 'GraphQL',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/graphql',
  }),
  endpoints: (build) => ({
    getIntrospection: build.query({
      query: (url: string) => ({
        url: !url ? 'https://rickandmortyapi.com/graphql' : url,
        headers: { Warning: 'RSHeroes' },
        mode: 'cors',
        method: 'post',
        body: {
          operationName: 'IntrospectionQuery',
          variables: {},
          query: introspectionQuery,
        },
      }),
    }),
    getGQLResponse: build.query({
      query: (arg: GQlArguments) => ({
        url: arg.url,
        mode: 'cors',
        method: 'post',
        headers: arg.headers,
        body: arg.headers,
      }),
    }),
  }),
});

export const { useGetIntrospectionQuery, useGetGQLResponseQuery } = graphQLApi;
