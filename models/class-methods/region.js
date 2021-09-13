module.exports = (Region, sequelize) => {
  Region.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    console.log(query.where.id)
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
    console.log('Get regions')
    const query = {
      raw: true
    }
    return Region.findAndCountAll(query)
  }

  Region.createRegion = (region) => {
    // console.log(region)
    console.log('Region created')
    console.log(region)
    return Region.create(region)
  }

  Region.deleteRegionById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    return Region.destroy(query)
  }

  Region.updateRegionById = (id, data) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    return Region.update(data, query)
  }

  return Region
}
