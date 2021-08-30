const { Op } = require('sequelize')

module.exports = (Category, sequelize) => {
  Category.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Category.findOne(query)
  }

  Category.findByName = (name) => {
    const query = {
      where: {
        name
      },
      raw: false
    }

    return Category.findOne(query)
  }

  Category.findByParentId = (parentId) => {
    const query = {
      where: {
        parentId
      },
      raw: true
    }

    return Category.findOne(query)
  }

  Category.getCategories = () => {
    const query = {
      limit: 5,
      where: {
        id: {
          [Op.gte]: 1
        }
      },
      raw: true
    }

    return Category.findAll(query)
  }

  Category.createCategory = (category) => {
    console.log('Category created')
    return Category.create(category)
  }

  Category.deleteCategoryById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    return Category.destroy(query)
  }

  Category.updateCategoryById = (id, data) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    return Category.update(data, query)
  }

  return Category
}
