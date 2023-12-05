import '@/styles/globals.css';
import '@/styles/welcome.scss';
import './../components/Button/Button.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
