import React, { FunctionComponent } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'

import { navNames, navLinks } from "../public/variables"

const Nav = () => {
  return (
    <nav className="bg-white flex justify-center border-b border-almostWhite">
      <div className="flex overflow-x-auto divide-x  divide-almostWhite bg-white h-12 md:h-16 font-semibold text-black  max-w-6xl mx-auto">
        {navNames.map((navName, index) => {
          const path: string = useRouter().asPath
          const isRoute: boolean = path === navLinks[index]


          return <NavItem name={navName} path={navLinks[index]} isRoute={isRoute} />
        })}
      </div>
    </nav>
  )
}


type NavProps = {
  name: string,
  path: string,
  isRoute: boolean
}

const NavItem: FunctionComponent<NavProps> = ({ path, isRoute, name }) => {
  return (
    <Link href={path}>
      <a className={`relative grid px-4 h-full z-20  ${isRoute && `bg-almostWhite `}`}>
        <div className={`self-center md:text-lg ${isRoute && `font-bold `}`}>{name}</div>
        {isRoute && <div className="absolute w-full h-2 bottom-0 bg-purple" />}
      </a>
    </Link>
  )
}




export default Nav;
