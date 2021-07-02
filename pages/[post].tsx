


import { importPostSlugs, importPost, getDataPhotos, getRandomPostBySubject, importPhoto } from "../localFunctions/importPosts"

import { formatDate } from "../localFunctions/formatdate"

import React, { FunctionComponent } from 'react'

//components
import { Layout } from "../components/layout"
import { PostItem } from "../components/postItem"
//functions
import { importPosts } from "../localFunctions/importPosts";
import { modifyTags } from "../localFunctions/modifyTags";
//typescript
import { PostData, DataPhotos, DataPhotosTotal } from "../typescript"

import { BsPencil } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { IconContext } from "react-icons";


type PostProps = {
  attributes: any,
  html: string,
  dataPhotos: DataPhotos
  randomPosts: { posts: PostData[], photos: DataPhotosTotal[] }
  middlePhoto: DataPhotos
}

function getPosition(string: any, subString: any, index: any) {
  return string.split(subString, index).join(subString).length;
}

const splitAt = (index: any) => (x: any) => [x.slice(0, index), x.slice(index)]



const Post: FunctionComponent<PostProps> = ({ attributes, html, dataPhotos, randomPosts, middlePhoto }) => {
  const image = `${dataPhotos.image}/?nf_resize=fit&w=700`

  const date: string = formatDate(attributes.date)

  const tags = modifyTags(attributes.tags)

  const index = getPosition(html, "</p>", 4) + 4

  const firstHtml = splitAt(index)(html)[0]
  const secondHtml = splitAt(index)(html)[1]

  return (
    <Layout title={attributes.title}>
      <div className="md:max-w-6xl  md:mx-auto">
        <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto">

          <div className="relative w-full h-full md:w-8/12 m-auto">
            <img
              src={image}
              alt={attributes.title}
              className="absolute inset-0 w-full h-full  object-cover"
            />
          </div>
          <p className="z-10 text-grey text-small text-sm text-center">bron: {dataPhotos.bron}</p>
        </div>


        <div className="p-4 md:mb-4">

          <h2 className="text-3xl font-bold text-black mb-6 md:text-center mt-4 md:mt-8 md:text-4xl">{attributes.title}</h2>

          <div className="flex mb-2 md:justify-center md:mb-4">

            <div className="flex">

              <IconContext.Provider value={{ color: "#707070", size: "1.5em", }}>
                <div>
                  <BiTimeFive className="mr-1" />
                </div>
              </IconContext.Provider>


              <time className="text text-grey m-auto">{date}</time>
            </div>
          </div>




          <div className="mb-6 text-xl mx-auto">

            <div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: firstHtml }}></div>
          </div>


          <div className="relative w-full h-72 md:max-w-4xl md:h-96 md:mt-10 md:mx-auto mb-20">

            <div className="relative w-full h-full md:w-8/12 m-auto">
              <img
                src={middlePhoto.image}
                alt={attributes.title}
                className="absolute inset-0 w-full h-full  object-cover"
              />
            </div>
            <p className="z-10 text-grey text-small text-sm text-center">{middlePhoto.onderschrift}</p>
            <p className="z-10 text-grey text-small text-sm text-center">bron: {middlePhoto.bron}</p>


          </div>







          <div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: secondHtml }}></div>
        </div>


        {attributes.tags && <ul className="flex flex-wrap mb-6 gap-y-2 mb-20">
          {tags.map((tag: string) => {
            return (
              <li className="text-purple font-bold p-2 border-2 border-purple rounded-md mr-4 whitespace-nowrap">{tag}</li>)
          })}
        </ul>}

        <div>
          <div className="mb-12">
            <span className="p-4 text-white bg-yellow">lees ook</span>
          </div>

          <div className="flex flex-wrap overflow-hidden my-4">
            {randomPosts.posts.map((post: PostData, index) => <PostItem post={post} photo={randomPosts.photos[index].headerData} />)}
          </div>
        </div>


      </div>

    </Layout >
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

  const post: PostData = await importPost(slug);




  const filePath = post.attributes.headerPhoto


  const dataPhotos = await getDataPhotos(filePath)
  const randomPosts = await getRandomPostBySubject(4, post.attributes.onderwerp)


  const filepathPhoto = post.attributes["photo's"][0]
  const photo = await importPhoto(filepathPhoto)

  return {
    props: {
      html: post.html,
      attributes: post.attributes,
      dataPhotos,
      randomPosts,
      middlePhoto: photo.attributes
    },
  };
}



export default Post;
