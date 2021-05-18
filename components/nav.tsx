import React, { FunctionComponent } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router'

import { navNames, navLinks } from "../public/variables"

const Nav = () => {

  return (
    <nav className="bg-white flex justify-center">
      <div className="flex overflow-x-auto divide-x divide-almostWhite border-b bg-white h-12 font-semibold text-black  max-w-6xl mx-auto">
        {navNames.map((navName, index) => {
          const path: string = useRouter().asPath
          const isRoute: boolean = path === navLinks[index]
          return <NavItem name={navName} path={navLinks[index]} isRoute={isRoute} />
        })}
      </div>
    </nav>
  )
}


type HomeProps = {
  name: string,
  path: string,
  isRoute: boolean
}

const NavItem: FunctionComponent<HomeProps> = ({ path, isRoute, name }) => {
  return (
    <Link href={path}>
      <a className="relative grid px-4 h-full ">
        <div className={`self-center ${isRoute && `font-medium`}`}>{name}</div>
        {isRoute && <div className="absolute w-full h-2 bottom-0 bg-purple" />}
      </a>
    </Link>
  )
}




export default Nav;
