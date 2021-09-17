const models = require('../../models')
const { ProductCategory } = models
const Promise = require('bluebird')

// const recursiveCreateCategory = (CategoryId, ProductId, next) => {
//   const createData = { CategoryId, ProductId }

//   return ProductCategory.createProductCategory(createData)
//     .then(() => {
//       return Category.findById(CategoryId)
//         .then((category) => {
//           if (category) {
//             if (category.parentId !== 0) {
//               return recursiveCreateCategory(category.parentId, ProductId, next)
//             }
//           }

//           return 0
//         })
//         .catch(next)
//     })
//     .catch(next)
// }

// const createProductCategory = (req, res, next) => {
//   const ProductId = parseInt(req.params.id, 10)
//   console.log(req.body)
//   const CategoryId = parseInt(req.body.CategoryId, 10)

//   return recursiveCreateCategory(CategoryId, ProductId, next)
//     .then(() => {
//       return res.json({ msg: 'succsesfully created' })
//     })
//     .catch(next)
// }

const lookUp = {}

const findNode = (node) => {
  lookUp[node.id] = node
  node.children && node.children.map(findNode)
}

const findParents = (nodeId) => {
  const parents = []
  let parentId = lookUp[nodeId].parentId

  while (parentId !== 0) {
    parents.push(parentId)
    parentId = lookUp[parentId].parentId
  }

  return parents
}

const createProductCategory = (req, res, next) => {
  const ProductId = parseInt(req.params.id, 10)
  const CategoryId = parseInt(req.body.CategoryId, 10)
  const categories = res.locals.__categories
  const categoriesTree = {
    id: 0,
    parentId: 0,
    children: categories
  }

  findNode(categoriesTree)

  const parents = findParents(CategoryId)
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
