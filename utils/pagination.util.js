const getPagingData = (data, page) => {
  const { count: totalItems, rows } = data
  const currentPage = page ? +page : 0

  return { totalItems, rows, currentPage }
}

module.exports = {
  getPagingData
}
