import { Handler } from '@netlify/functions'
const lunr = require('lunr');


const handler = async (event: any) => {
  try {

    const searchInputUser = event.queryStringParameters.search;
    if (!searchInputUser) throw ('Missing term query parameter');



    const data = lunr.Index.load(require('./index.json'));

    const formattedSearch = formatSearch(data, searchInputUser, 6)


    return {
      statusCode: 200,
      body: JSON.stringify(formattedSearch),

    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
export { handler };


export const formatSearch = (data: any, searchInputUser: string, amountofResults: number): number[] => {
  const results = data.search(searchInputUser)

  const refs = results.map((result: any) => { return result.ref })
  const titles = refs.splice(0, amountofResults)
  return titles
}