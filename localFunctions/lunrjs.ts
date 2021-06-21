import { PostData } from "../typescript"

export const lunrjs = async (): Promise<PostData[]> => {
  const fileNames = getPostFileNames()
  const posts = await getPosts(fileNames)
  console.log(posts)
  return posts
}

const getPostFileNames = (): string[] => {
  const Files = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Files
}

const getPosts = async (fileNames: string[]): Promise<PostData[]> => {

  return Promise.all(
    fileNames.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  )
}