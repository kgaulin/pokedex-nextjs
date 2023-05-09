export const extractIdFromUrl = (url: string): number => {
  const splittedUrl = url.split('/')
  return Number(splittedUrl[6])
}
