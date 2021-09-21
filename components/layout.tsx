
import React, { FunctionComponent, useEffect } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'

//components
import Nav from "./nav"

import { useIsMenuOpen } from '../state/isMenuOpen'

type LayoutProps = {
  title: string
}
export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  const router = useRouter()
  const { dispatch, state } = useIsMenuOpen()

  const isMenuOpen = state.isMenuOpen
  const menuAction = isMenuOpen ? "close" : "open"

  const handleRouteChange = () => {
    dispatch({ type: "close" })

  }

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, []);


  return (
    <>
      <Head>
        <title>{title}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div className="relative">

        {isMenuOpen && <div className="absolute w-full h-full top-0 left-0 z-20 opacity-50 bg-gray-50 "></div>}

        <Nav />
        <div className="relative overflow-hidden">



          <div className="">

            {children}
          </div>
        </div>
      </div>
    </>
  )
}