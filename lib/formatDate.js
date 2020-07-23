const formatDate = (date) => {
  const dateFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', dateFormat)
}

export default formatDate
