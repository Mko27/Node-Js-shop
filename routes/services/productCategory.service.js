const models = require('../../models')
const { ProductCategory, Category } = models

const recursiveCreateCategory = (CategoryId, ProductId, next) => {
  const createData = { CategoryId, ProductId }

  return ProductCategory.createProductCategory(createData)
    .then(() => {
      return Category.findById(CategoryId)
        .then((category) => {
          if (category) {
            if (category.parentId !== 0) {
              return recursiveCreateCategory(category.parentId, ProductId, next)
            }
          }

          return 0
        })
        .catch(next)
    })
    .catch(next)
}

const createProductCategory = (req, res, next) => {
  const ProductId = parseInt(req.params.id, 10)
  console.log(req.body)
  const CategoryId = parseInt(req.body.CategoryId, 10)

  return recursiveCreateCategory(CategoryId, ProductId, next)
    .then(() => {
      return res.json({ msg: 'succsesfully created' })
    })
    .catch(next)
}

// const createProductCategory = (req, res, next) => {
//   console.log('locals ', JSON.stringify(res.locals.__categories, null, 2))
// }

module.exports = {
  createProductCategory
}
