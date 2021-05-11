import axios from "axios";



const addTwoStrings = (accumulator: string, currentValue: any) =>
  `${accumulator}/${currentValue}`;

const reduceArgs = (params: any[]) => params.reduce(addTwoStrings);

export const fetcher = async (url: string[], body = {}) => {
  const newURL = MakeCompleteURL(url);

  if (Object.keys(body).length !== 0) {

    const response = axios.post(newURL, body);

    return response;
  }

  const data = await axios.get(newURL);
  return data.data;
};

const MakeCompleteURL = (url: string[]): string => {
  if (url.length === 1) return url[0];
  return reduceArgs(url);
};
