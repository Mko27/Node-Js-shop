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

  Product.findByIdForUser = (query) => {
    return Product.findOne(query)
  }

  Product.findByUserId = (userId) => {
    const query = {
      where: {
        userId
      },
      raw: true
    }

    return Product.findAll(query)
  }

  Product.getByCategories = (query) => {
    return Product.findAndCountAll(query)
  }

  Product.getProductsByQuantity = (limit, offset) => {
    const query = {
      limit,
      offset,
      raw: true
    }

    return Product.findAndCountAll(query)
  }

  Product.createProduct = (data) => {
    return Product.create(data)
  }

  Product.deleteProduct = (id) => {
    const query = {
      where: {
        id
      }
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
