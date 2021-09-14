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
      raw: true
    }

    return Category.findOne(query)
  }

  Category.findBySlug = (slug) => {
    const query = {
      where: {
        slug
      },
      raw: true
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

    return Category.findAndCountAll(query)
  }

  Category.getCategories = () => {
    const query = {
      where: {
        id: {
          [Op.gte]: 1
        }
      },
      raw: true
    }

    return Category.findAll(query)
  }

  Category.getCategoriesByQuantity = (limit, offset, name) => {
    const filters = { id: {
      [Op.gte]: 1
    }
    }
    if (name) {
      filters.name = {
        [Op.like]: `%${name}%`
      }
    }
    const query = {
      limit,
      offset,
      where: filters,
      raw: true
    }

    return Category.findAndCountAll(query)
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
