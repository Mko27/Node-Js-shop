module.exports = (ProductCategory, sequelize) => {
  ProductCategory.createProductCategory = (data) => {
    return ProductCategory.create(data)
  }

  ProductCategory.deleteProductCategory = () => {

  }
  return ProductCategory
}
