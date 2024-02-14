// src/pages/_app.tsx or pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css'; // Adjust the path to your globals.css file

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
