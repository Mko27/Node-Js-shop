const models = require('../../models')
const { ProductCategory } = models
const Promise = require('bluebird')

const findParents = (id, list, parentIds = []) => {
  const elem = list.find(item => item.id === id)

  if (elem.parentId !== 0) {
    parentIds.push(elem.parentId)
    findParents(elem.parentId, list, parentIds)
  }

  return parentIds
}

// const findRelativesNodes = (list, id, relatives = []) => {
//   const elem = list.find(item => item.id === id)

//   if (elem.children) {
//     relatives.push(elem.children.reduce((acc, cur) => {
//       console.log('cur', cur)
//       acc.push(cur.id)
//       return acc
//     }, []))
//   }

//   if (elem.parentId) {
//     return findRelativesNodes(list, elem.parentId, relatives)
//   }
//   if (!elem.parentId) {
//     return relatives
//   }
// }

const createProductCategory = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  const categoryId = parseInt(req.body.categoryId, 10)
  const categories = res.locals.__categoriesList
  const parents = findParents(categoryId, categories)
  parents.push(categoryId)
  return Promise.map(parents, (categoryId) => {
    const createData = { productId, categoryId }
    return ProductCategory.createProductCategory(createData)
      .then((result) => console.log(result))
      .catch(next)
  })
    .then(() => res.json({ msg: 'succsesfully created' }))
    .catch(next)
}

const deleteProductCategory = (req, res, next) => {
  const productId = parseInt(req.params.id, 10)
  const categoryId = parseInt(req.body.categoryId, 10)
  return ProductCategory.deleteProductCategory(categoryId, productId)
    .then(() => res.json({ msg: 'Successfully deleted' }))
    .catch(next)
}

module.exports = {
  createProductCategory,
  deleteProductCategory
}
