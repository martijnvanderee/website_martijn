
import Nav from "../../components/nav";
import { Layout } from "../../components/layout"

import { importPostSlugs, importPost } from "../../functions/importPosts"

const BlogPost = (props: any) => {

  return (
    <Layout title={props.attributes.title}>
      {/* <div className="relative">
        <div className="overlay-background-image bg-blue-100 opacity-25" />
        <Nav />

        <div className="relative pb-16 px-8 mx-auto md:max-w-screen-md pt-32">
          <h1 className="text-4xl text-headerColor text-center mb-4">{props.attributes.title}</h1>

          <div className="text-base md:text-lg text-fontColor content-center">

            <div className="w-full h-full max-w-2xl m-auto">
              <img
                className="h-full w-full rounded-t"
                src={props.attributes.image}
              />
            </div>

            <h6 className="text text-headerColor mt-4 mb-4">{props.attributes.Subtitle}</h6>

            <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export async function getStaticPaths() {
  const slugs = await importPostSlugs()

  const paths = slugs.map((slug: string) => ({
    params: { blogPost: slug.toString() },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }: any) {

  const slug = `${params.blogPost}.md`

  const post = await importPost(slug);

  return {
    props: {
      html: post.html,
      attributes: post.attributes

    },
  };
}

export default BlogPost;
