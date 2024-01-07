import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import storeApp from '@/redux/store/store';
import { AuthProvider } from '@/context/AuthProvider';
import LanguageContext from '@/context/langContext';
import langContextInit from '@/utils/langContextInit';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { StoreMaker } from '@/types/types';
import '@/styles/globals.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const storeRef = useRef<StoreMaker>();
  if (!storeRef.current) {
    storeRef.current = storeApp();
  }
  return (
    <Provider store={storeRef.current}>
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
