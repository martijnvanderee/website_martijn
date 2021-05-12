
import React, { FunctionComponent } from 'react'
import Head from 'next/head';



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
      {children}
    </>
  )

}