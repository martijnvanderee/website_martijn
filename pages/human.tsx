import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { getPosts, getRandomPosts } from "../localFunctions/importPosts";
//typescript
import { PostData, DataPhotosTotal } from "../typescript"
//variables
import { amountOfPostFrontPage } from "../public/variables"

type HumanProps = {
  posts: { posts: PostData[], photos: DataPhotosTotal[] },
  randomPosts: { posts: PostData[], photos: DataPhotosTotal[] }
}

const Human: FunctionComponent<HumanProps> = ({ posts, randomPosts }) => {

  const post = posts.posts[0]
  const photo = posts.photos[0]
  const url = post.slug
  const [, ...postOftheRest] = posts.posts;
  const [, ...photosOftheRest] = posts.photos;

  return (
    <Layout title="Sciencegeek">
      <main>
        <div>

          <div className="md:grid  md:grid-cols-2 md:mt-10">
            <Link href={`/${url}`} as={`/${url}`}>

              <div className="relative w-full h-72 md:max-w-4xl md:h-96  md:mx-auto cursor-pointer">
                <div className="relative w-full h-full ">

                  <div className="absolute z-10 bottom-0 m-4">
                    <h2 className="text-shadow text-white text-3xl md:text-4xl">{post.attributes.title}</h2>
                  </div>
                  <img
                    src={`${photo.headerData.image}/?nf_resize=fit&w=700`}
                    alt={post.attributes.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

              </div>
            </Link>

            <div className=" md:hidden h-2 w-full bg-almostWhite"></div>

            <div className="mb-10 md:mb-0">
              <div className="md:h-96 md:overflow-auto">

                <div className="sticky md:static top-72 z-10 border-b-2 border-yellow p-3 md:mx-4 md:pt-0 bg-white">
                  <h3 className="text-center text-2xl text-black font-bold md:text-2xl ">Het laatste human nieuws!</h3>
                </div>

                <div className="flex flex-wrap overflow-hidden my-4 sm:mx-4">
                  {postOftheRest.map((post: PostData, index) => <PostItem post={post} key={index} photo={photosOftheRest[index].headerData} />)}
                </div>

              </div>

              <Link href={`/net-binnen/1`}>
                <div className="text-2xl md:text-2xl font-semibold leading-tight text-grey ml-4 cursor-pointer" >Meer human nieuws <span className="text-2xl md:text-xl font-semibold leading-tight text-purple">{">"}</span>  </div>
              </Link>
            </div>


          </div>

          <div className="hidden md:block bg-almostWhite h-0.5 w-full mt-8"></div>

          <div className="text-2xl mt-10 ml-4 font-bold text-grey hidden md:block">
            <h2 className="inline border-b border-almostWhite ">Lees ook één van onze andere verhalen</h2>
          </div>

          <div className="hidden md:block md:grid  md:grid-cols-3 pb-10 mt-2">


            {randomPosts.posts.map((randomPost: PostData, index) => {

              const url = randomPost.slug
              return (
                <Link href={`/${url}`} as={`/${url}`}>
                  <div className="m-4 cursor-pointer">
                    <div className="relative h-64">
                      <img
                        src={`${randomPosts.photos[index].headerData.image}/?nf_resize=fit&w=700`}
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
                </Link>
              )
            })}




          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts(amountOfPostFrontPage, "human")
  const randomPosts = await getRandomPosts(6)

  return { props: { posts, randomPosts } }

}

export default Human;