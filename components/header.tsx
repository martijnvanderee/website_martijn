
import Nav from './nav';
import Link from "next/link";
import { FaSearch, FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const Header = () => (
  <header className="sticky top-0 z-20 bg-purple">

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-3 justify-between px-4 h-16 md:h-20 ">

        <div></div>
        <Link href="/">
          <a className="my-auto text-center">
            <h1 className="text-4xl text-white md:text-5xl ">Cog<strong className="text-yellow">novi</strong></h1>
            <div className="hidden md:block text-almostWhite">het beste wetenschappelijke nieuws</div>
          </a>

        </Link>


        <div className="flex my-auto">
          {/* <div className="text-white underline underline-yellow">blijf up to date</div>
          <div className="text-white">stel vragen</div> */}
          <div className="flex my-auto">
            <IconContext.Provider value={{ color: "white", className: "mr-2 md:hidden", size: "1.5em", }}>
              <div>
                <FaSearch />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", className: "mr-2 hidden md:block", size: "1.5em", }}>
              <div>
                <FaSearch />
              </div>
            </IconContext.Provider>
            <div className="text-white my-auto md:text mr-4">Zoeken</div>


          </div>

          <div className="flex my-auto">




            <IconContext.Provider value={{ color: "white", className: "mr-2 md:hidden", size: "1.5em" }}>
              <div >
                <FaBars />
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "white", className: "mr-2 hidden md:block", size: "1.5em" }}>
              <div >
                <FaBars />
              </div>
            </IconContext.Provider>


            <div className="text-white my-auto md:text">Menu</div>
          </div>


        </div>
      </div>
    </div >
    <Nav />
  </header >
);
