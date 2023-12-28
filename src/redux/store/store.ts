import { configureStore } from '@reduxjs/toolkit';
import { graphQLApi } from '../rtk-query/fetchApI';
import urlSlice from '../url/urlSlice';

const storeApp = () => {
  return configureStore({
    reducer: {
      [urlSlice.reducerPath]: urlSlice.reducer,
      [graphQLApi.reducerPath]: graphQLApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true,
      }).concat(graphQLApi.middleware),
  });
};

export default storeApp;
