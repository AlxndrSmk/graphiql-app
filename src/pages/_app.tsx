import { AuthProvider } from '@/context/AuthProvider';
import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <>
        <Component {...pageProps} />
      </>
    </AuthProvider>
  );
};

export default App;
import '@/styles/globals.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <>
        <Component {...pageProps} />
      </>
    </AuthProvider>
  );
};

export default App;
