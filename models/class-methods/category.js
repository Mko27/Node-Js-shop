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

  Category.findByNameOrSlug = (name, slug) => {
    const query = {
      where: {
        [Op.or]: [{ name }, { slug }]
      },
      raw: true
    }

    return Category.findOne(query)
  }

  Category.findByParentIdCategoriesCount = (parentId) => {
    const query = {
      where: {
        parentId
      },
      raw: true
    }

    return Category.count(query)
  }

  Category.getCategories = () => {
    const query = {
      where: {
        id: {
          [Op.gte]: 1
        },

        status: 0
      },
      raw: true
    }

    return Category.findAll(query)
  }

  Category.getCategoriesByQuantity = (limit, offset, name) => {
    const where = { id: {
      [Op.gte]: 1
    }
    }
    if (name) {
      where.name = {
        [Op.like]: `%${name}%`
      }
    }
    const query = {
      limit,
      offset,
      where,
      raw: true
    }

    return Category.findAndCountAll(query)
  }

  Category.createCategory = (category) => {
    return Category.create(category)
  }

  Category.deleteCategoryById = (id) => {
    const query = {
      where: {
        id
      }
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
