// src/pages/_app.tsx or pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css'; // Adjust the path to your globals.css file
import { Provider } from 'react-redux';
import store from '@/app/redux/store';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
