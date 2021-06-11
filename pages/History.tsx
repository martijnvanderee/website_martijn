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
        history
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  //const amountOfPost = 10
  const posts1: any[] = await importPost1(100, "history");

  const posts: PostData = JSON.parse(JSON.stringify(posts1));
  const randomPosts = await randomPost(5)
  return { props: { posts, randomPosts } }
}


export default Home;