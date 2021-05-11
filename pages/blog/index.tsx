import Nav from "../../components/nav";
import { Title } from "../../components/title";
import { BlogPost } from "../../components/blogPost";
//typescript
import { PostData } from "../../typescript"
//functions
import { importPosts, importPostSlugs } from "../../functions/importPosts";

type Props = {
  posts: any[];
};

const Blog: React.FunctionComponent<Props> = ({ posts }) => {

  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />
      <Nav />

      <div className="content-container">
        <Title
          color="#013f5d"
          title="Blog"
        />

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto ">

          {posts.map((blogPost, index) => (
            <BlogPost blogPost={blogPost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts1: PostData[] = await importPosts();
  const posts: PostData = JSON.parse(JSON.stringify(posts1));

  return { props: { posts } }
}


export default Blog;
