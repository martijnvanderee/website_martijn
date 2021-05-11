
import Nav from "../../components/nav";

import { importPostSlugs, importPost } from "../../functions/importPosts"

const customImage = (props: any) => {
  return (
    <img className={"mx-auto max-h-h128"} alt={props.alt} src={props.src} />
  );
};

const customLink = (props: any) => {
  return (
    <a
      className={"border-solid border-b border-color1 text-lg text-fontColor"}
      href={props.href}
    >
      {props.children}
    </a>
  );
};


const BlogPost = (props: any) => {

  const renderers = {
    image: customImage,
    link: customLink,
  };
  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />
      <Nav />

      <div className="relative pb-16 px-8 mx-auto md:max-w-screen-md pt-32">
        <h1 className="text-4xl text-headerColor text-center">{props.attributes.title}</h1>
        <div className="text-base md:text-lg text-fontColor content-center">
          <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
        </div>
      </div>
    </div>
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
