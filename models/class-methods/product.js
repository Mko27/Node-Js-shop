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

  Product.findByUserId = (UserId) => {
    const query = {
      where: {
        UserId
      },
      raw: true
    }

    return Product.findAndCountAll(query)
  }

  Product.getProducts = () => {
    const query = {
      raw: true
    }

    return Product.findAll()
  }

  Product.createProduct = (data) => {
    return Product.create(data)
  }

  Product.deleteProduct = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Product.destroy(query)
  }

  Product.updateProduct = (data, id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    return Product.update(data, query)
  }

  return Product
}
