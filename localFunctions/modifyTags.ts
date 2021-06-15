export const modifyTags = (tags: string[]): string[] => {
  const a = tags[0].search(",")
  if (a !== -1 && tags.length === 1) return tags[0].split(",")
  return tags


}