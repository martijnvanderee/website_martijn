import React, { FunctionComponent } from 'react'

//components
import { Layout } from "../components/layout"
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
    <Layout title="Dennis Stassen">
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
    </Layout>
  )
}

export async function getStaticProps() {
  const posts1: PostData[] = await importPosts();
  const blog: PostData = JSON.parse(JSON.stringify(posts1));

  return { props: { blog } }
}


export default Home;