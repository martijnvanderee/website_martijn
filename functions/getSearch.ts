import { Handler } from '@netlify/functions'

const products = require('../test.json');
//import lunr from '../test.json'

const handler: Handler = async (event, context) => {



  // const results = data.search(searchInputUser)


  // const refs = results.map((result: any) => { return result.ref })
  // const titles = refs.splice(0, amountofResults)


  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

export { handler };