const fs = require('fs')

const MT = require('mark-twain');

module.exports = {
  onSuccess: () => {
    console.log('onInit: I run before anything else 🐣');
  },
  onPreBuild: async ({ utils }) => {
    console.log("my plugin loaded!")

    const PostFileNames = getPostFileNames()
    const postTitles = await getPosts(PostFileNames)


    const index = createIndex(postTitles)

    fs.writeFileSync('./functions/data.json', JSON.stringify(postTitles));
    fs.writeFileSync('./functions/index.json', JSON.stringify(index));


    try {

    } catch (error) {
      utils.build.failBuild('Failure message', { error })
    }
  },
}



const getPostFileNames = () => {
  const PostFileNames = fs.readdirSync("./content/posts").map((file) => {
    return file

  })
  return PostFileNames
}

const getPosts = async (fileNames) => {
  return Promise.all(
    fileNames.map(async (path, index) => {
      const markdown = MT(fs.readFileSync(`./content/posts/${path}`).toString());
      const title = markdown.meta.title
      const onderwerp = markdown.meta.onderwerp
      const date = markdown.meta.date
      const tags = markdown.meta.tags.join(" ");
      const content = markdown.content.flat().join(' ')
      const slug = path.substring(0, path.length - 3)
      const id = index
      const headerPhoto = markdown.meta.headerPhoto
      const link = MT(fs.readFileSync(`./content/${"photo's"}/${headerPhoto}.md`).toString());

      const image = link.meta.image
      return { title, tags, content, slug, id, image, date, onderwerp }
    })
  )
}

const createIndex = (posts) => {
  const lunr = require("lunr")
  var idx = lunr(function () {
    const lunrProp = lunr
    this.field('tags', {
      boost: 10
    })
    this.field("title", {
      boost: 10
    });
    this.field("content");
    this.ref('id')

    const datas = posts

    // documents.forEach(
    //   function (data) {
    //     this.add(data)
    //   }, this)

    datas.map((data, index) => {
      this.add(data)
    })
  })

  return idx
}





const getAllPosts = async (fileNames) => {

  const posts = await getPostTitles(fileNames)

  return posts
}


