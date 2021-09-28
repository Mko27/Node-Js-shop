module.exports = (Image, sequelize) => {
  Image.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Image.findOne(query)
  }

  Image.findByProductId = (productId) => {
    const query = {
      where: {
        productId
      },
      order: [
        ['order', 'ASC']
      ]
    }

    return Image.findAll(query)
  }

  Image.createImage = (data) => {
    return Image.create(data)
  }

  Image.deleteImageById = (id) => {
    const query = {
      where: {
        id
      }
    }

    return Image.destroy(query)
  }

  Image.productImagesCount = (productId) => {
    const query = {
      where: {
        productId
      }
    }

    return Image.count(query)
  }
  return Image
}
