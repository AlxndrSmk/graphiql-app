import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import LanguageContext from "@/context/langContext";
import langContextInit from "@/utils/langContextInit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageContext.Provider value={langContextInit}>
      <Component {...pageProps} />
    </LanguageContext.Provider>
  ) ;
}
