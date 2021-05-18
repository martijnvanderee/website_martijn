


import { importPostSlugs, importPost } from "../functions/importPosts"

import parse from 'html-react-parser';
import { formatDate } from "../functions/formatdate"

import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { importPosts } from "../functions/importPosts";

//typescript
import { PostData } from "../typescript"

import { BsPencil } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { IconContext } from "react-icons";


type PostProps = {
  attributes: any,
  html: string,
  posts: PostData[]
}

const Post: FunctionComponent<PostProps> = ({ attributes, html, posts }) => {


  const image = attributes.image
  const date: string = formatDate(attributes.date)
  return (
    <Layout title={attributes.title}>
      <div className="md:max-w-6xl  md:mx-auto">
        <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto">
          <div className="absolute z-10 bottom-0 m-4">
          </div>
          <img
            src={image}
            alt={attributes.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-4 md:mb-4">
          <h2 className="text-3xl font-bold text-black mb-2 text-center md:mt-8 md:text-4xl">{attributes.title}</h2>

          <div className="flex mb-2 justify-center md:mb-4">
            <div className="flex mr-4">

              <IconContext.Provider value={{ color: "#707070", size: "1.5em", }}>
                <div>
                  <BsPencil className="mr-1" />
                </div>
              </IconContext.Provider>

              <span className="text text-grey m-auto">{attributes.auteur}</span>
            </div>
            <div className="flex">

              <IconContext.Provider value={{ color: "#707070", size: "1.5em", }}>
                <div>
                  <BiTimeFive className="mr-1" />
                </div>
              </IconContext.Provider>


              <time className="text text-grey m-auto">{date}</time>
            </div>
          </div>


          {attributes.tags && <ul className="flex mb-6">
            {attributes.tags.map((tag: string) => {
              return (<li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4">{tag}</li>)
            })}
          </ul>}


          <div className="mb-12 text-xl mx-auto"><div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>


          <div>
            <div className="mb-12">
              <span className="p-4 text-white bg-yellow">lees ook</span>
            </div>

            <div className="flex flex-wrap overflow-hidden my-4">
              {posts.map((post: PostData) => <PostItem content={post} />)}
            </div>
          </div>


        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const slugs = await importPostSlugs()

  const paths = slugs.map((slug: string) => ({
    params: { post: slug.toString() },
  }));


  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: any) {

  const slug = `${params.post}.md`

  const post = await importPost(slug);
  const posts1: PostData[] = await importPosts(5);

  const posts: PostData = JSON.parse(JSON.stringify(posts1));

  return {
    props: {
      html: post.html,
      attributes: post.attributes,
      posts

    },
  };
}

export default Post;
