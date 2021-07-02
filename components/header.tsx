
import Nav from './nav';
import Link from "next/link";
import { FaSearch, FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { useIsMenuOpen } from '../state/isMenuOpen'
import { useIsSearchMenuOpen } from '../state/isSearchMenuOpen'


export const Header = () => {
  const { dispatch, state } = useIsMenuOpen()
  const { dispatchMenu, state: { isSearchMenuOpen } } = useIsSearchMenuOpen()

  const isMenuOpen = state.isMenuOpen
  const menuAction = isMenuOpen ? "close" : "open"
  const SearchmenuAction = isSearchMenuOpen ? "close" : "open"



  return (
    <header className="sticky top-0 z-20 bg-purple">
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-between  max-w-screen-lg mx-auto px-4 h-16 md:h-20 ">

          <div className="hidden md:block"></div>

          <Link href="/">
            <a className="my-auto md:text-center hidden sm:block md:flex md:mx-auto">
              <div className="my-auto "> <h1 className="text-4xl text-white md:text-5xl  font-black ">Science<strong className="text-yellow">Geek</strong></h1>
                <div className="hidden md:block text-almostWhite">het beste wetenschappelijke nieuws</div></div>

              <div className="h-20 hidden md:block ">
                <img
                  className="h-full cursor-pointer "
                  alt="logo science geek"
                  src='/sciencegeeklogo.png'
                />
              </div>

            </a>
          </Link>

          <Link href="/">
            <a className="my-auto sm:hidden">
              <h1 className="text-4xl text-white md:text-5xl  font-black ">S<strong className="text-yellow">G</strong></h1>
              <div className="hidden md:block text-almostWhite">het beste wetenschappelijke nieuws</div>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="h-20 left-20 sm:left-64 sm:h-24 sm:h-16 sm:-top-2 absolute m-auto md:hidden">
              <img
                className="h-full cursor-pointer "
                alt="logo science geek"
                src='/sciencegeeklogo.png'
              />
            </a>
          </Link>



          <div className="flex my-auto justify-end">
            {/* <div className="text-white underline underline-yellow">blijf up to date</div>
            <div className="text-white">stel vragen</div> */}
            <div className="flex my-auto cursor-pointer" onClick={() => dispatchMenu({ type: SearchmenuAction })}>
              <IconContext.Provider value={{ color: "white", className: "mr-4 md:hidden", size: "2em", }}>
                <div className="flex items-center justify-content">
                  <FaSearch />
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "white", className: "mr-1 hidden md:block", size: "2.5em", }}>
                <div className="flex items-center justify-content">
                  <FaSearch />
                </div>
              </IconContext.Provider>
              <div className="text-white my-auto text-lg md:text mr-4 hidden md:block">Zoeken</div>
            </div>

            <div className="flex my-auto cursor-pointer " onClick={() => dispatch({ type: menuAction })}>
              <IconContext.Provider value={{ color: "white", className: "mr-1 md:hidden", size: "2em" }}>
                <div className="flex items-center justify-content">
                  <FaBars />
                </div>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "white", className: "mr-1 hidden md:block", size: "2.5em" }}>
                <div className="flex items-center justify-content">
                  <FaBars />
                </div>
              </IconContext.Provider>
              <div className="text-white text-lg my-auto md:text">Menu</div>
            </div>

          </div>
        </div>
      </div >
      <Nav />
    </header >)
}

