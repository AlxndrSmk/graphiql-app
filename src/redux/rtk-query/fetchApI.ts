import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const graphQLApi = createApi({
  reducerPath: 'GraphQL',
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getIntrospection: build.query({
      query: () => ({
        url: 'introspection',
        mode: 'cors',
        method: 'post',
        body: {},
      }),
    }),
  }),
});

export const { getIntrospection } = graphQLApi.endpoints;
