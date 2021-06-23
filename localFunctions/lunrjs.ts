import lunr from "lunr"
require("lunr-languages/lunr.stemmer.support")(lunr)
require('lunr-languages/lunr.multi')(lunr)
require("lunr-languages/lunr.nl")(lunr)

import React, { useEffect } from "react"


type titles = {
  title: string
  tags: string[]
}

export const getAllPosts = async (): Promise<titles[]> => {
  const fileNames = getPostFileNames()
  const posts = await getPostTitles(fileNames)

  return posts
}

const getPostTitles = async (fileNames: string[]) => {
  return Promise.all(
    fileNames.map(async path => {
      const markdown: any = await import(`../content/posts/${path}`);
      const title = markdown.attributes.title
      const tags = markdown.attributes.tags.join(" ");
      const content = markdown.html
      return { title, tags, content };
    })
  )
}


const getPostFileNames = (): string[] => {
  const Files = require.context('../content/posts', false, /\.md$/).keys()
    .map(relativePath => relativePath.substring(2));

  return Files
}


const putInLunr = (posts: titles[]) => {

  var idx = lunr(function () {
    const lunrProp: any = lunr
    const languages = lunrProp.multiLanguage('en', 'nl')
    this.use(languages)
    this.field('tags', {
      boost: 10
    })
    this.field("title", {
      boost: 10
    });
    this.field("content");
    this.ref('title')

    const datas = posts

    datas.forEach(function (data) {
      this.add(data)
    }, this)

  })

  return idx
}

export const getSearchData = async () => {
  const posts = await getAllPosts()
  const searchEngine = putInLunr(posts)

  return searchEngine
}


export const getSearch = (data: any, searchInputUser: string, amountofResults: number): number[] => {
  const results = data.search(searchInputUser)

  const refs = results.map((result: any) => { return result.ref })
  const titles = refs.splice(0, amountofResults)
  return titles
}



export const useFetch = () => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getSearchData()
        setResponse(res)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};