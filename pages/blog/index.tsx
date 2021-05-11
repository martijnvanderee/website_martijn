import Nav from "../../components/nav";
import { Title } from "../../components/title";
import { BlogPost } from "../../components/blogPost";
//typescript
import { PostData } from "../../typescript"
//functions
import { importPosts } from "../../functions/importPosts";

type Props = {
  blog: any[];
};

const Blog: React.FunctionComponent<Props> = ({ blog }) => {

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

          {blog.map((blogPost, index) => (
            <BlogPost blogPost={blogPost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts: PostData[] = await importPosts();
  const blog: PostData = JSON.parse(JSON.stringify(posts));

  return { props: { blog } }
}

export default Blog;

