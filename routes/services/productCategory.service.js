const models = require('../../models')
const { ProductCategory } = models
const Promise = require('bluebird')

const findParents = (id, list, parentIds = []) => {
  const el = list.find(item => item.id === id)

  if (el.parentId !== 0) {
    parentIds.push(el.parentId)
    findParents(el.parentId, list, parentIds)
  }

  return parentIds
}

const createProductCategory = (req, res, next) => {
  const ProductId = parseInt(req.params.id, 10)
  const CategoryId = parseInt(req.body.CategoryId, 10)
  const categories = res.locals.__categoriesList

  const parents = findParents(CategoryId, categories)
  parents.push(CategoryId)

  return Promise.map(parents, (CategoryId) => {
    const createData = { ProductId, CategoryId }
    return ProductCategory.createProductCategory(createData)
      .then((result) => console.log(result))
      .catch(next)
  })
    .then(() => res.json({ msg: 'succsesfully created' }))
    .catch(next)
}

module.exports = {
  createProductCategory
}
