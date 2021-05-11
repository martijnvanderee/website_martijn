


const addTwoStrings = (accumulator: string, currentValue: any) =>
  `${accumulator}/${currentValue}`;

const reduceArgs = (params: any[]) => params.reduce(addTwoStrings);



const MakeCompleteURL = (url: string[]): string => {
  if (url.length === 1) return url[0];
  return reduceArgs(url);
};
