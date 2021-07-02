import { useState, useEffect } from "react"
import Link from "next/link";

import { FormInput } from "./index"
import { useFetch } from "../../localFunctions/lunrjs"

import { useIsSearchMenuOpen } from '../../state/isSearchMenuOpen'

import { fakeData } from "../../functions/fakedata"

import { PostItem, PostItem1 } from "../../components/postItem"
const debounce = require('debounce');

import { FaBackspace } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { useKeyPress } from "../../hooks/useKeyPress"




export const SearchPage = () => {
  const { state, dispatchMenu } = useIsSearchMenuOpen()
  const isEnterPressed = useKeyPress({
    key: "Escape",
  })

  useEffect(() => {
    if (isEnterPressed) dispatchMenu({ type: "close" })
  }, [isEnterPressed])

  const switchClass = state.isSearchMenuOpen ? "visible" : "hidden"

  const [query, setQuery]: any = useState(null)


  const env = process.env.NODE_ENV
  const url = query && `https://monique1.netlify.app.netlify/functions/getSearch/?search=${query}`

  // const url = query && env === "development" ? `${process.env.LOCALHOST}.netlify/functions/getSearch/?search=${query}` : `${process.env.LIVE_URL}.netlify/functions/getSearch/?search=${query}`

  const { response, error }: any = useFetch(url);

  let data = response?.data;



  const handleChange = (e: string) => {
    if (e) {
      setQuery(e)
    }
  }

  return (
    <div className={`${switchClass} bg-white top-16 md:top-36 z-20 h-full w-full
   `}>

      {/* exit button */}
      <div className="flex my-auto justify-end px-4 sm:px-10 cursor-pointer" onClick={() => dispatchMenu({ type: "close" })}>
        <div className="flex my-auto">
          <div className="text-gray-600 my-auto text-lg md:text-xl mr-2 font-bold">Keer terug</div>
          <IconContext.Provider value={{ color: "grey", className: "", size: "3em", }}>
            <div className="">
              <FaBackspace />
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className={`m-auto sm:px-10 md:max-w-6xl`}>
        <div className={`p-4`}>
          <FormInput type={"text"} onChange={debounce(handleChange, 1000)} />
        </div>

        {fakeData && <div className="mt-8">{fakeData.posts.map((post: any, index: any) => {
          return (<PostItem post={post} photo={fakeData.photos[index].headerData} />)
        })} </div>}

      </div>
    </div>
  );
}


//<PostItem post={post} photo={fakeData.photos[index].headerData} />

//<PostItem1 slug={post.slug} image={post.image} title={post.title} date={post.date} onderwerp={post.onderwerp} />