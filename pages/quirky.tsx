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
  randomPosts: PostData[]
}

const Home: FunctionComponent<HomeProps> = ({ posts, randomPosts }) => {
  const post = posts[0]
  const url = post.slug
  const [, ...postOftheRest] = posts;

  return (
    <Layout title="Sciencegeek">
      <main>
        <div>

          <div className="md:grid  md:grid-cols-2 md:mt-10">
            <Link href={`/${url}`} as={`/${url}`}>
              <div className="relative pb-1/2 h-0 cursor-pointer md:h-96">
                <div className="absolute z-10 bottom-0 m-4">
                  <h2 className="text-shadow text-white text-3xl md:text-4xl">{post.attributes.title}</h2>
                </div>
                <img
                  src={post.attributes.headerPhoto}
                  alt="title van artikel"
                  className="absolute inset-0 w-full h-full "
                />
              </div>
            </Link>

            <div className=" md:hidden h-2 w-full bg-almostWhite"></div>

            <div className="md:h-96 md:overflow-auto">
              <div className="sticky md:static top-28 z-20 border-b-2 border-yellow p-3 md:mx-4 md:pt-0 bg-white">
                <h3 className="text-center text-2xl text-black font-bold md:text-2xl ">Het laatste nieuws op sciencegeek!</h3>
              </div>

              <div className="flex flex-wrap overflow-hidden my-4 sm:mx-4">
                {postOftheRest.map((post: PostData) => <PostItem content={post} />)}
              </div>
            </div>
          </div>

          <div className="hidden md:block bg-almostWhite h-0.5 w-full mt-8"></div>
          <div className="text-2xl mt-10 ml-4 font-bold text-grey hidden md:block">
            <h2 className="inline border-b border-almostWhite ">Lees ook één van onze andere verhalen</h2>
          </div>

          <div className="hidden md:block md:grid  md:grid-cols-3 pb-10 mt-2">


            {randomPosts.map((randomPost: any) => {
              return (<div className="p-4">
                <div className="relative h-64 ">
                  <img
                    src={randomPost.attributes.headerPhoto}
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
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  //const amountOfPost = 10
  const posts1: any[] = await importPost1(100, "quirky");

  const posts: PostData = JSON.parse(JSON.stringify(posts1));
  const randomPosts = await randomPost(5)
  return { props: { posts, randomPosts } }
}


export default Home;