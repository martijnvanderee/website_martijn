


import { getNumberOfPages, getSpecificPosts } from "../../localFunctions/importPosts"

import parse from 'html-react-parser';
import { formatDate } from "../../localFunctions/formatdate"

import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../../components/layout"
import { PostItem } from "../../components/postItem"
import Pagination from '../../components/pagination/index';
//functions
import { importPosts } from "../../localFunctions/importPosts";

//typescript
import { PostData } from "../../typescript"

import { BsPencil } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { IconContext } from "react-icons";



type NetBinnenProps = {
  posts: PostData[],
}

const NetBinnen: FunctionComponent<NetBinnenProps> = ({ posts }) => {

  return (<Layout title="meer net binnen">
    <main>

      <div className="mx-4 mt-10 mb-10 text-4xl font-bold underline text-black">
        <h1>Net binnen</h1>
      </div>

      <div className=" grid  sm:grid-cols-2 md:grid-cols-3 pb-10 mt-2 ">

        {posts.map((randomPost: any) => {
          return (<div className="p-4">
            <div className="relative h-64 ">
              <img
                src={`${randomPost.attributes.image}/?nf_resize=fit&w=700`}
                alt={randomPost.attributes.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative h-36 p-2 ">
              <div>
                <div className="text-yellow font-medium mb-2">{randomPost.attributes.onderwerp}</div>
                <div className="text-black font-semibold text-2xl">{randomPost.attributes.title}</div>
              </div>
              <div className="absolute w-12 bg-yellow h-0.5 bottom-0 right-0"></div>
              <div className="absolute w-0.5 bg-yellow h-12 bottom-0 right-0"></div>
            </div>
          </div>
          )
        })}



      </div>
      <Pagination />

    </main>
  </Layout>)
}

export async function getStaticPaths() {
  const numberOfPosts = 5
  const listPages = getNumberOfPages(numberOfPosts);
  const arrayOfNumbers = Array.from(Array(listPages + 1).keys())
  const [, ...removeFirstElement] = arrayOfNumbers;



  const paths = removeFirstElement.map((slug: number) => ({
    params: { id: slug.toString() },
  }));




  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: any) {
  const numberOfPosts = 5
  const numberOfPostsStart = Number(params.id) * numberOfPosts
  const numberOfPostsStartEnd = Number(params.id) * numberOfPosts + 5


  const posts1: PostData[] = await getSpecificPosts(numberOfPostsStart, numberOfPostsStartEnd)
  const posts: PostData = JSON.parse(JSON.stringify(posts1));

  return {
    props: { posts }
  };
}


export default NetBinnen;
