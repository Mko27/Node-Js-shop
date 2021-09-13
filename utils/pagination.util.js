const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0

  return { limit, offset }
}

const getPagingData = (data, page) => {
  const { count: totalItems, rows: categories } = data
  const currentPage = page ? +page : 0

  return { totalItems, categories, currentPage }
}

module.exports = {
  getPagination,
  getPagingData
}
