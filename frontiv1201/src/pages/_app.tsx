// src/pages/_app.tsx or pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css'; // Adjust the path to your globals.css file
import { Provider } from 'react-redux';
import store from '@/app/redux/store';
import NavbarPresenter from '@/app/components/navbar/navbarPresenter';
import { GlobalDiv } from '@/app/styles/styles';


/**
 * Main app component that wraps the entire application.
 * 
 * @param Component - The page component
 * @param pageProps - The props for the page component
 * @returns - The page component wrapped in the Redux store provider
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalDiv>
      <NavbarPresenter />
      <Component {...pageProps} />
      </GlobalDiv>
    </Provider>
  );
};

export default MyApp;
