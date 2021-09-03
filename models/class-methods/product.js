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
