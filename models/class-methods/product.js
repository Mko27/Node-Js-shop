module.exports = (Product, sequelize) => {
  Product.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Product.findOne(query)
  }

  Product.getProducts = () => {
    const query = {
      raw: true
    }

    return Product.findAll(query)
  }
  return Product
}
