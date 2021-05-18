
import React, { FunctionComponent } from 'react'
import Head from 'next/head';

//components
import { Header } from "./header"


type LayoutProps = {
  title: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <div>
        <Header />
        <div className=" h-10 w-full bg-almostWhite"></div>
        <div className="max-w-screen-lg mx-auto">
          {children}
        </div>
      </div>
    </>
  )
}