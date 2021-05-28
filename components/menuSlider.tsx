
import React, { FunctionComponent } from 'react'
import { useIsMenuOpen } from '../state/isMenuOpen'

import { CgClose } from 'react-icons/cg';
import { IconContext } from "react-icons";

import { navNames, navLinks } from "../public/variables"
import { useRouter } from 'next/router'
import Link from "next/link";

export const MenuSlider = () => {
  const { state, dispatch } = useIsMenuOpen()

  const switchClass = state.isMenuOpen ? "w-96 right-0" : "w-96 -right-96"


  return (
    <div className={`fixed right-0 top-16 md:top-20 h-screen bg-white z-30 ${switchClass} transition-all duration-1000 border-l border-almostWhite`}>

      <div className={``}>

        <IconContext.Provider value={{ color: "", className: "", size: "1.5em", }}>
          <button className="float-right mr-4 mt-4" onClick={() => dispatch({ type: 'close' })}><CgClose /></button>

        </IconContext.Provider>



        <Zoeken />
        <div className="mt-4">
          {navNames.map((navName, index) => {
            const path: string = useRouter().asPath
            const isRoute: boolean = path === navLinks[index]
            return <NavItem name={navName} path={navLinks[index]} isRoute={isRoute} />
          })}

          <Link href="/over-sciencegeek">
            <a className={` relative`}>
              <div className={`ml-4 text-2xl py-4 border-b border-almostWhite  `}>Over Cognovi</div>


            </a>
          </Link>
        </div>



      </div>
    </div>


  );
};

type NavProps = {
  name: string,
  path: string,
  isRoute: boolean
}


const NavItem: FunctionComponent<NavProps> = ({ path, isRoute, name }) => {
  return (
    <Link href={path}>
      <a className={` relative ${isRoute && `bg-almostWhite flex`}`}>
        <div className={`ml-4 text-2xl py-4 border-b border-almostWhite  ${isRoute && `font-bold `}`}>{name}</div>
        {isRoute && <div className="absolute h-full w-2 left-0 bg-purple" />}

      </a>
    </Link>
  )
}


type ButtonProps = {

}

const Zoeken: FunctionComponent<ButtonProps> = () => {
  return (
    <div className="flex py-6 px-4 border-b border-t border-almostWhite">
      <div className="w-full">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="instantie">

          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 py-3 " id="instantie" type="text" placeholder="zoek op trefwoord,titel of auteur" name="instantie" />
        </label>

      </div>


      <button className="bg-purple text-white text-xl
       font-bold py-1 px-2 rounded ml-1" type="submit">
        Zoek
</button>

    </div>
  )
}

