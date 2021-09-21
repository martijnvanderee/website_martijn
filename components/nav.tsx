import React, { FunctionComponent, useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'

import { contentRoutes } from "../content"

import { useIsMenuOpen } from '../state/isMenuOpen'

//icons
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { IconContext } from "react-icons";

type ContentRoute = {
  name: string,
  path: string,
}

const Nav = () => {
  const { dispatch, state } = useIsMenuOpen()

  const isMenuOpen = state.isMenuOpen
  const menuAction = isMenuOpen ? "close" : "open"


  const handleClickMenu = () => {
    dispatch({ type: menuAction })
  }

  return (
    <nav className="font-mono bg-white">
      <div className="flex justify-between bg-white h-32 mx-8">

        {/* logo */}
        <div className="flex my-auto cursor-pointer" onClick={() => { }}>
          <img src="./images/logo.svg" alt="" />
        </div>

        {/* menu media small*/}
        {isMenuOpen ?
          <div className="flex my-auto cursor-pointer md:hidden mt-10 z-30 " onClick={handleClickMenu}>
            <div className="bg-lightGrey p-4 rounded-md" >

              <IconContext.Provider value={{ color: "black", className: "", size: "1.5em" }}>
                <div className="flex items-center justify-content float-right">
                  <ImCross />
                </div>
              </IconContext.Provider>


              <div className="m-2 mr-8">
                <a href="/" className="cursor-pointer">
                  <div className="flex mb-6">
                    <div className="mr-4" onClick={() => { }}>
                      <img src="./images/buttonHome.svg" alt="" />
                    </div>
                    <div className="my-auto text-lg text-grey hover:text-black">Home</div>
                  </div>
                </a>

                <a href="/contact" className="cursor-pointer">
                  <div className="flex" >
                    <div className="mr-4" onClick={() => { }}>
                      <img src="./images/buttonContact.svg" alt="" />
                    </div>
                    <div className="my-auto text-lg text-grey hover:text-black">Contact</div>
                  </div>
                </a>
              </div>
            </div>
          </div> :
          <div className="flex my-auto cursor-pointer md:hidden z-30" onClick={handleClickMenu}>
            <div className="bg-lightGrey p-4 rounded-md" >
              <IconContext.Provider value={{ color: "black", className: "", size: "1.5em" }}>
                <div className="flex items-center justify-content ">
                  <FaBars />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        }

        {/* menu media large*/}
        <div className="flex hidden md:flex">
          <div className="my-auto cursor-pointer hidden md:flex">
            {contentRoutes.map((contentRoute: ContentRoute) => {
              return (
                <NavItem contentRoute={contentRoute} />)
            })}
          </div>

          {/* Contact button*/}
          <Link href="/contact">
            <a className="my-auto cursor-pointer ml-4">
              <button className="px-6 py-2 bg-lightGrey rounded-md text-lg font-medium">
                Contact
              </button>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}




type NavProps = {
  contentRoute: {
    name: string,
    path: string,
  }
}

const NavItem: FunctionComponent<NavProps> = ({ contentRoute }) => {
  const { path, name } = contentRoute
  return (
    <Link href={path}>
      <a className={`relative grid px-4 h-full z-20 text-grey font-medium hover:font-bold`}>
        <div className={`self-center md:text-lg hover:text-black`}>{name}</div>
      </a>
    </Link>
  )
}


export default Nav;
