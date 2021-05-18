import React, { FunctionComponent } from 'react'
import Link from "next/link";

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { importPosts } from "../functions/importPosts";

//typescript
import { PostData } from "../typescript"

type HomeProps = {
  posts: PostData[],
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  const post1 = posts[0]
  const url = post1.slug
  const [, ...postOftheRest] = posts;

  return (
    <Layout title="Cognovi">
      <main>
        <div>


          <div className="md:grid  md:grid-cols-2 md:mt-10">
            <Link href={`/${url}`} as={`/${url}`}>
              <div className="relative w-full h-72 cursor-pointer md:h-96">
                <div className="absolute z-10 bottom-0 m-4">
                  <h2 className="text-shadow text-white text-2xl">{post1.attributes.title}</h2>
                </div>
                <img
                  src={post1.attributes.image}
                  alt="title van artikel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </Link>

            <div className="md:h-96 md:overflow-auto">
              <div className="sticky md:static top-24 z-20 border-b-2 border-yellow p-3 md:pt-0 bg-white">
                <h3 className="text-center text-xl font-normal md:text-2xl md:font-semibold">Laatste Nieuws</h3>
              </div>

              <div className="flex flex-wrap overflow-hidden my-4">
                {postOftheRest.map((post: PostData) => <PostItem content={post} />)}
              </div>
            </div>
          </div>

          <div className="hidden md:block bg-almostWhite h-1 w-full mt-8"></div>

          <div className="md:grid  md:grid-cols-3 pb-10 mt-10">

            <div className="p-4">
              <div className="relative h-64 ">
                <img
                  src={post1.attributes.image}
                  alt="title van artikel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48">
                <div className="text-yellow font-medium mb-2">boe daar schroke je van</div>
                <div className="text-black font-semibold text-3xl">dit is een titel</div>
                <div className="absolute w-24 bg-yellow h-1 bottom-0 right-0"></div>
                <div className="absolute w-1 bg-yellow h-24 bottom-0 right-0"></div>
              </div>
            </div>


            <div>post2</div>
            <div>post3</div>

          </div>


        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const amountOfPost = 5
  const posts1: PostData[] = await importPosts(10);


  const posts: PostData = JSON.parse(JSON.stringify(posts1));
  return { props: { posts } }
}


export default Home;