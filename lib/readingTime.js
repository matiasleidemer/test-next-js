const pluralize = (time, singular, plural) => (time > 1 ? plural : singular)

const readingTime = (content) => {
  const time = Math.ceil(content.split(' ').length / 200)

  return `${time} ${pluralize(time, 'minute', 'minutes')}`
}

export default readingTime
