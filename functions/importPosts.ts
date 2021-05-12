export const importPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export const importPostSlugs = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2, relativePath.length - 3));
  return Promise.all(
    markdownFiles
  );
};


export const importPost = async (path: string) => {
  const markdown = await import(`../content/posts/${path}`);

  return markdown
};


export const importPost1 = async () => {
  const PostPathAndDate: any = await getPostPathAndDate()
  const Sorted = sortingPost(PostPathAndDate)

  return Promise.all(
    Sorted.map(async (path: any) => {
      const markdown = await import(`../content/posts/${path.path}`);

      return { ...markdown, slug: path.path.substring(0, path.path.length - 3) };
    })
  );
}

const sortingPost = (PostPathAndDate: any) => {
  return PostPathAndDate.sort((a: any, b: any) => (a.date < b.date ? 1 : -1))
}

const getPostPathAndDate = () => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      const date = await markdown.attributes.date
      return { date, path };
    })
  );
}

