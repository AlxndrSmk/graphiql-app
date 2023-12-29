import { configureStore } from '@reduxjs/toolkit';
import { graphQLApi } from '../rtk-query/fetchApI';
import urlSlice from '@/redux/url/urlSlice';

const storeApp = () => {
  return configureStore({
    reducer: {
      [graphQLApi.reducerPath]: graphQLApi.reducer,
      [urlSlice.name]: urlSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(graphQLApi.middleware),
  });
};

export default storeApp;
