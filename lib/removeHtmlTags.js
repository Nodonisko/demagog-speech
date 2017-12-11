const removeHtmlTags = (text: string): string =>
  text.replace(/<(?:.|\n)*?>/gm, '')

export default removeHtmlTags
