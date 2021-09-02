module.exports = (Tag, sequelize) => {
  Tag.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Tag.findOne(query)
  }

  Tag.findAll = () => {

  }
  return Tag
}
