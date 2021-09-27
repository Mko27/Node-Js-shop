module.exports = (Tag, sequelize) => {

  Tag.getAllTags = () => {
    const query = {
      raw: true
    }

    return Tag.findAll(query)
  }

  Tag.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Tag.findOne(query)
  }

  Tag.createTag = (data) => {
    return Tag.create(data)
  }
  return Tag
}
