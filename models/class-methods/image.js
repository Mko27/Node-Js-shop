module.exports = (Image, sequelize) => {
  Image.findByProductId = (productId) => {
    const query = {
      where: {
        productId
      },
      raw: true
    }

    return Image.findAll(query)
  }

  Image.createImage = (data) => {
    return Image.create(data)
  }
  return Image
}
