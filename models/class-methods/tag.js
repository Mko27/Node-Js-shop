const { Op } = require('sequelize')

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

  Tag.deleteById = (id) => {
    const query = {
      where: {
        id
      }
    }
    return Tag.destroy(query)
  }

  Tag.updateById = (id, data) => {
    const query = {
      where: {
        id
      }
    }

    return Tag.update(data, query)
  }

  Tag.searchByTitle = (title) => {
    const query = {
      where: {
        title: { [Op.like]: `%${title}%` }
      },
      raw: true
    }

    return Tag.findAll(query)
  }

  return Tag
}
