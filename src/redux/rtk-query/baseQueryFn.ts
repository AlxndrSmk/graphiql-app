import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';

async function baseQueryFn(
  args: string | FetchArgs,
  queryApi: BaseQueryApi,
  extraOptions: {}
) {
  const baseUrl = (queryApi.getState() as any).baseUrl;
  const rawBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  > = fetchBaseQuery({
    baseUrl,
  });
  return rawBaseQuery(args, queryApi, extraOptions);
}

export default baseQueryFn;
