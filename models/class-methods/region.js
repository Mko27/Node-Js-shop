module.exports = (Region, sequelize) => {
  Region.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return Region.findOne(query)
  }

  Region.findByName = (name) => {
    const query = {
      where: {
        name
      },
      raw: true
    }

    return Region.findOne(query)
  }

  Region.getRegions = () => {
    const query = {
      raw: true
    }
    return Region.findAll(query)
  }

  Region.createRegion = (region) => {
    return Region.create(region)
  }

  Region.deleteRegionById = (id) => {
    const query = {
      where: {
        id
      }
    }
    return Region.destroy(query)
  }

  Region.updateRegionById = (id, data) => {
    const query = {
      where: {
        id
      }
    }
    return Region.update(data, query)
  }

  return Region
}
