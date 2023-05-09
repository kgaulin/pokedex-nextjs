export const padLeft = (strToPad: number | string, length: number): string => {
  let str = String(strToPad)
  if (str.length >= length) {
    return str
  }

  for (let i = 0; i <= length - str.length; i++) {
    str = '0' + str
  }
  return str
}
