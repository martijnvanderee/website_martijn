export const importPosts = async (numberOfPosts: number = 100) => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  const posts = await getSubsetPosts(markdownFiles, numberOfPosts)
  return Promise.all(
    posts.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export const getNumberOfPages = (numberOfPosts: number = 6) => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));


  const NumberOfPages = Math.ceil(markdownFiles.length / numberOfPosts)

  return NumberOfPages
};

export const getSpecificPosts = async (start: number, end: number) => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  const fileNames = await markdownFiles.slice(start, end);



  return Promise.all(
    fileNames.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};






export const filterPosts = () => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      const onderwerp = await markdown.attributes.onderwerp
      return { onderwerp };
    })
  );
}


const getSubsetPosts = async (files: string[], numberOfPosts: number,) => files.slice(0, numberOfPosts);


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

export const randomPost = async (numberOfPost: number = 1) => {
  const PostPathDateOnderwerp: any = await getPostPathAndDate()

  const length = await PostPathDateOnderwerp.length
  const array = await Array.from(Array(numberOfPost).keys())

  const random1 = await random(length, array)


  const test1 = random1.map((num: number) => PostPathDateOnderwerp[num])


  return Promise.all(
    test1.map(async (path: any) => {
      const markdown = await import(`../content/posts/${path.path}`);

      return { ...markdown, slug: path.path.substring(0, path.path.length - 3) };
    })
  );

}

const random = (length: number, numberOfPost: number[]) => {

  const test = numberOfPost.map(() => getRandomInt(length))
  return test
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const importPost1 = async (numberOfPosts: number = 100, sortSubject: string = "all") => {

  const PostPathDateOnderwerp: any = await getPostPathAndDate()


  const a = sortSubject === "all" ? PostPathDateOnderwerp : sortingPostOnSubject(PostPathDateOnderwerp, sortSubject)

  const Sorted = sortingPost(a)

  const finish = await getSubsetPosts(Sorted, numberOfPosts)


  return Promise.all(
    finish.map(async (path: any) => {
      const markdown = await import(`../content/posts/${path.path}`);

      return { ...markdown, slug: path.path.substring(0, path.path.length - 3) };
    })
  );
}

const sortingPost = (PostPathAndDate: any) => {
  return PostPathAndDate.sort((a: any, b: any) => (a.date < b.date ? 1 : -1))
}

const sortingPostOnSubject = (PostPathAndDate: any, subject: any) => {
  return PostPathAndDate.filter((Post: any) => (Post.onderwerp === subject))
}



const getPostPathAndDate = () => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));


  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      const date = await markdown.attributes.date
      const onderwerp = await markdown.attributes.onderwerp
      return { date, path, onderwerp };
    })
  );
}

