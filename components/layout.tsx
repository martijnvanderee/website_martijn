
import React, { FunctionComponent, useEffect } from 'react'
import Head from 'next/head';

//components
import { Header } from "./header"
import { MenuSlider } from '../components/menuSlider';
import { SearchPage } from '../components/search/searchPage';

import { useRouter } from 'next/router'

import { useIsMenuOpen } from '../state/isMenuOpen'
import { useIsSearchMenuOpen } from '../state/isSearchMenuOpen'

type LayoutProps = {
  title: string
}

export const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
  const router = useRouter()

  const { dispatch, state } = useIsMenuOpen()
  const { dispatchMenu, state: { isSearchMenuOpen } } = useIsSearchMenuOpen()


  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      dispatch({ type: "close" })
      dispatchMenu({ type: "close" })
    }

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
        <Header />

        <div className="relative overflow-hidden">


          <MenuSlider />
          <div className="hidden md:block h-10 w-full bg-almostWhite"></div>

          {isSearchMenuOpen ?
            <SearchPage /> :
            <div className="max-w-screen-lg mx-auto">
              {children}
            </div>}
        </div>


      </div>
    </>
  )
}