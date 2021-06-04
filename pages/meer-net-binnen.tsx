import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { importPost1, randomPost } from "../localFunctions/importPosts";

//typescript
import { PostData } from "../typescript"

type HomeProps = {
  posts: PostData[],
}

const MeerNetBinnen: FunctionComponent<HomeProps> = ({ posts }) => {
  return <Layout title="meer net binnen">
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


    </main>
  </Layout>
}


export async function getStaticProps() {
  const amountOfPost = 10
  const posts1: any[] = await importPost1(amountOfPost);

  const posts: PostData = JSON.parse(JSON.stringify(posts1));
  return { props: { posts } }
}

export default MeerNetBinnen

