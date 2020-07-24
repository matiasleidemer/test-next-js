const formatDate = (date) => {
  const dateFormat = {
    year: 'numeric',
    month: 'long',
  }

  return date.toLocaleDateString('en-US', dateFormat)
}

export default formatDate
