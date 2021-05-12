import React from "react";
import Link from "next/link";

import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Nav = () => (
  <header className="flex fixed w-full bg-color3 justify-between py-2 px-4 z-10 items-center sm:px-12">
    <div className="flex items-center justify-between w-full">
      <Link href="/" passHref>
        <a className="h-12 sm:h-16">
          <img
            className="h-full cursor-pointer  h-8 w-16 sm:w-24"
            alt="logo dennis stassen"
            src={
              "https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_150/v1602325989/dennisStassen/logoDennis-1.png"
            }
          />
        </a>
      </Link>

      <nav className="flex mr-4">
        <Link href="/materiaal" passHref>
          <a className="flex items-center mx-2 text-base text-gray-300 sm:text-xl sm:my-2 hover:text-white hover:cursor-pointer">Materiaal/video's</a>
        </Link>

        <Link href="/about" passHref>
          <a className="flex items-center mx-2 text-base text-gray-300 sm:text-xl sm:my-2 hover:text-white hover:cursor-pointer">Over Mij</a>
        </Link>

        <Link href="/blog" passHref>
          <a className="flex items-center mx-2 text-base text-gray-300 sm:text-xl sm:my-2 hover:text-white hover:cursor-pointer">Blog</a>
        </Link>

        <Link href="/contact" passHref>
          <a className="flex justify-center items-center rounded p-1  mx-1 border-none text-white text-base bg-color1 shadow hover:bg-hoverColor1 transition duration-500 ease-in-out
           md:text-xl md:p-2 md:mx-2
          ">
            Contact
          </a>
        </Link>

        <a className="" href="https://nl.linkedin.com/in/dennisstassen">
          <LinkedInIcon style={{ fontSize: 30 }} className="text-color1 ">
            <div className="w-10 h-10 bg-white m-auto"></div></LinkedInIcon>
        </a>
      </nav>
    </div>
  </header>
);

export default Nav;
