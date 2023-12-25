import { AuthProvider } from '@/context/AuthProvider';
import type { AppProps } from 'next/app';
import LanguageContext from '@/context/langContext';
import langContextInit from '@/utils/langContextInit';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

import '@/styles/globals.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <LanguageContext.Provider value={langContextInit}>
        <AuthProvider>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </AuthProvider>
      </LanguageContext.Provider>
    </Provider>
  );
};

export default App;
