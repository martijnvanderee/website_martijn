import React, { FunctionComponent } from 'react'
//components
import { Layout } from "../../components/layout"
import Pagination from '../../components/pagination/index';
import { Post } from '../../components/postHeaderBig';
//functions
import { getUrlPaths, getPropsFromPaths } from "../../localFunctions/importPosts"
//typescript
import { PostData, DataPhotosTotal } from "../../typescript"

type NetBinnenProps = {
  posts: PostData[],
  photos: DataPhotosTotal[]
}

const NetBinnen: FunctionComponent<NetBinnenProps> = ({ posts, photos }) => {
  return (
    <Layout title="meer net binnen">
      <main>
        {/* net binnen */}
        <div className="mx-4 mt-10 mb-10 text-4xl font-bold underline text-grey">
          <h1>Net binnen</h1>
        </div>

        {/* posts */}
        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 pb-10 mt-2 ">
          {posts.map((post: PostData, index) => {
            const url = post.slug
            return (<Post url={url} post={post} photo={photos[index]} />)
          })}
        </div>

        <Pagination />

      </main>
    </Layout>)
}

export async function getStaticPaths() {
  const paths = await getUrlPaths()

  return { paths, fallback: false };
}

type Params = {
  params: { id: string }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: Params) {
  const props = await getPropsFromPaths(params.id)

  return {
    props
  };
}

export default NetBinnen;
