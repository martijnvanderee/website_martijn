import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
//import { ServerStyleSheets } from '@material-ui/core/styles';
//import theme from '../utils/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="text-xs">
        <Head>
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}
