module.exports = (Product, sequelize) => {
  Product.findById = (query) => {
    // const query = {
    //   where: {
    //     id
    //   },
    //   raw: true
    // }

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

  Product.getByCategories = (query) => {
    return Product.findAndCountAll(query)
  }

  Product.getProducts = () => {
    const query = {
      where: {
        status: 'Published'
      },
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
