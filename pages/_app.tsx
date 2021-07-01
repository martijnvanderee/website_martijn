import React from 'react';

// Modules
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css'

import { IsMenuOpenProvider } from '../state/isMenuOpen'
import { IsSearchMenuOpenProvider } from '../state/isSearchMenuOpen'


// MUI Core
//import CssBaseline from '@material-ui/core/CssBaseline';
//import { ThemeProvider } from '@material-ui/core/styles';
// Utils
//import theme from '../utils/theme';

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
        <meta name="description" content="ScienceGeek brengt internationaal en binnenlands wetenschappelijk nieuws. Deze
wetenschappelijke feitjes gaan over wetenschappelijk onderzoek gedaan naar
fossielen, dino’s, oude beschavingen als de maya’s en de inca’s, ruimtevaart, de
zoektocht naar aliens, sex, psychologie, milieu en geschiedenis. Of het nu gaat om
onze natuur, technologische innnovaties of ontdekkingen op het gebied van menselijke
levensverwachting en gezondheid: ScienceGeek brengt het.
ScienceGeek is een onafhankelijk nieuwsmedium. We publiceren" />
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