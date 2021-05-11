import React, { FunctionComponent } from 'react'
import Head from "next/head"

//components
import Nav from "../components/nav";
import { Title } from "../components/title";
import { Header } from "../components/header";
import { BackgroundImage } from "../components/backgroundImage";
import { BlogPosts } from "../components/index__blogPosts";
//functions
import { importPosts } from "../functions/importPosts";

//typescript
import { PostData } from "../typescript"

type HomeProps = {
  blog: PostData[],
}

const Home: FunctionComponent<HomeProps> = ({ blog }) => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Homepage</title>
      </Head>
      <div className="relative h-screen v-screen">
        <Nav />
        <BackgroundImage />
        <main className="relative pb-16 px-8 mx-auto md:max-w-screen-md">
          <Title
            color="white"
            title="Dennis Stassen"
            subtitle="Enthousiast Econoom & Leergierige Leraar"
          />
          <>
            <Header />
            <BlogPosts blogPosts={blog} />
          </>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts1: PostData[] = await importPosts();
  const blog: PostData = JSON.parse(JSON.stringify(posts1));

  return { props: { blog } }
}


export default Home;