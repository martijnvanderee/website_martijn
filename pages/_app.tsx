import React from 'react';

// Modules
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css'

import { IsMenuOpenProvider } from '../state/isMenuOpen'
import { IsSearchMenuOpenProvider } from '../state/isSearchMenuOpen'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>ScienceGeek</title>
        <meta name="description" content="" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/ico/sciencegeekLogo.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap" rel="stylesheet" />
      </Head>

      <IsMenuOpenProvider>
        <IsSearchMenuOpenProvider>
          <Component {...pageProps} />
        </IsSearchMenuOpenProvider>
      </IsMenuOpenProvider>

    </>
  );
};

export default MyApp;