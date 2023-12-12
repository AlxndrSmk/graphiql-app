import { AuthProvider } from '@/context/AuthProvider';
import type { AppProps } from 'next/app';
import LanguageContext from '@/context/langContext';
import langContextInit from '@/utils/langContextInit';

import '@/styles/globals.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LanguageContext.Provider value={langContextInit}>
      <AuthProvider>
        <>
          <Component {...pageProps} />
        </>
      </AuthProvider>
    </LanguageContext.Provider>
  );
};

export default App;
