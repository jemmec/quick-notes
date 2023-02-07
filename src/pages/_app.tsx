import type { AppProps } from 'next/app';
import Script from 'next/script'
import '@/styles/globals.css';
import '@/styles/prism.css';
import '@/styles/prism-live.css';
import '../../public/fonts/style.css';
import { ThemeProvider } from 'next-themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="prism.js" />
      <Script src="prism-live.js?load=javascript" />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
