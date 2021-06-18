
//typescript
import { DataPhotosTotal, PostData } from "../typescript"
//variables
import { numberOfPostsOnPage } from "../public/variables"

export const getImagePaths = (posts: PostData[]): GetSpecificPhotos => {
  const imagePaths = posts.map((post) => {
    return { headerPath: post.attributes.headerPhoto, photosPath: post.attributes["photo's"] }
  })
  return imagePaths
}

export const getPropsFromPaths = async (slug: string) => {
  const numberOfPostsStart = Number(slug) * numberOfPostsOnPage - numberOfPostsOnPage
  const numberOfPostsStartEnd = Number(slug) * numberOfPostsOnPage

  const posts1: PostData[] = await getSpecificPosts(numberOfPostsStart, numberOfPostsStartEnd)
  const posts: PostData[] = JSON.parse(JSON.stringify(posts1));

  const imagePaths = getImagePaths(posts)

  const photosData = await getSpecificPhotos(imagePaths)
  return { photos: photosData, posts }
}

export const getUrlPaths = async () => {
  const listPages = getNumberOfPages(numberOfPostsOnPage);
  const arrayOfNumbers = Array.from(Array(listPages + 1).keys())
  const [, ...removeFirstElement] = arrayOfNumbers;

  return removeFirstElement.map((slug: number) => ({
    params: { id: slug.toString() },
  }));
}

export const getDataPhotos = async (path: string) => {
  const markdown = await import(`../content/photo's/${path}.md`);
  return markdown.attributes
}

export const importPosts1 = async (PathPosts: string[]) => {
  return Promise.all(
    PathPosts.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

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

type GetSpecificPhotos = {
  headerPath: string;
  photosPath: string[]
}[]

export const getSpecificPhotos = async (ImagePaths: GetSpecificPhotos): Promise<DataPhotosTotal[]> => {
  const dataPhotos: any = await Promise.all(ImagePaths.map(async ({ headerPath, photosPath }) => {
    const headerDataFull = await import(`../content/photo's/${headerPath}.md`);

    const photosData = await Promise.all(photosPath.map(async (photoPath) => {
      const photoDataFull = await import(`../content/photo's/${photoPath}.md`);
      return photoDataFull.attributes
    }))

    const headerData = headerDataFull.attributes
    return { headerData, photosData }
  }))

  return dataPhotos
};


export const getFileNames = () => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return markdownFiles
}

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

export const randomPost = async (numberOfPost: number = 1): Promise<PostData[]> => {
  const PostPathDateOnderwerp = await getPostPathAndDate()



  const randomPostNumbers = await getRandomPostNumbers(PostPathDateOnderwerp, numberOfPost)

  const DatePathOnderwerp = await randomPostNumbers.map((num: number) => PostPathDateOnderwerp[num])

  return Promise.all(
    DatePathOnderwerp.map(async (obj: any) => {
      const markdown = await import(`../content/posts/${obj.path}`);
      return { ...markdown, slug: obj.path.substring(0, obj.path.length - 3) };
    })
  );
}

export const sortBySubject = (sortSubject: string = "all") => {
}







export const getRandomPosts = async (numberOfPost: number = 1) => {
  const posts = await randomPost(numberOfPost)

  const imagePaths = getImagePaths(posts)
  const photosData = await getSpecificPhotos(imagePaths)

  return { posts, photos: photosData }
}

function recurse(length: number, array: number[]) {
  const randomInt = getRandomInt(length)
  return randomInt
}



const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

export const importPost1 = async (numberOfPosts: number = 100, sortSubject: string = "all") => {

  const PostPathDateOnderwerp: any = await getPostPathAndDate()

  const a = sortSubject === "all" ? PostPathDateOnderwerp : getPostBySubject(PostPathDateOnderwerp, sortSubject)

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





const getPostPathAndDate = (): Promise<{
  date: any;
  path: string;
  onderwerp: any;
}[]> => {
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

const getPostPaths = () => {
  const markdownFiles = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));
  return markdownFiles
}

const getNumberOfPosts = (posts: string[]) => {
  return posts.length
}

// 6 random by subject
const getPostBySubject = (posts: any[], subject: string) => {
  return posts.filter((post: any) => (post.onderwerp === subject))
}



const getRandomPaths = (randomPostNumbers: number[], posts: string[]) => {
  const a = randomPostNumbers.map((postNumber) => {

    return posts[postNumber]
  })


  return a
}




const getRandomPostNumbers = (posts: any[], amountOfPosts: number): number[] => {

  const numberOfTotalPosts = getNumberOfPosts(posts)

  const array1 = Array.from(Array(amountOfPosts).keys())

  const array: any = []
  array1.map(() => { return array.push(recurse(numberOfTotalPosts, array)) })

  return array
}



export const getRandomPostBySubject = async (amountOfPosts: number, subject: string) => {

  const postPathDate = await getPostPathAndDate()


  const postsBySubject = getPostBySubject(postPathDate, subject)


  const randomPostNumbers = getRandomPostNumbers(postsBySubject, amountOfPosts)
  //get randompaths
  const postPath = getRandomPaths(randomPostNumbers, postsBySubject)

  //get posts
  const posts = await getPost(postPath)
  //get photos
  const imagePaths = getImagePaths(posts)
  const photosData = await getSpecificPhotos(imagePaths)
  //return
  return { posts, photos: photosData }
}

const getPost = (postPath: string[]) => {

  return Promise.all(
    postPath.map(async (path: any) => {
      const markdown = await import(`../content/posts/${path.path}`);

      return { ...markdown, slug: path.path.substring(0, path.path.length - 3) };
    })
  );
}


export const getPosts = async (amountOfPostFrontPage: number, sortSubject: string = "all") => {
  const posts1: PostData[] = await importPost1(amountOfPostFrontPage, sortSubject);
  const posts: PostData[] = await JSON.parse(JSON.stringify(posts1));

  const imagePaths = getImagePaths(posts)
  const photosData = await getSpecificPhotos(imagePaths)

  return { posts, photos: photosData }
}