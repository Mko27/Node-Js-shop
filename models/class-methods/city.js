module.exports = (City, sequelize) => {
  City.findById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
    }

    return City.findOne(query)
  }

  City.findByName = (name) => {
    const query = {
      where: {
        name
      },
      raw: true
    }

    return City.findOne(query)
  }

  City.getCities = () => {
    const query = {
      raw: true
    }
    return City.findAll(query)
  }

  City.createCity = (city) => {
    return City.create(city)
  }

  City.deleteCityById = (id) => {
    const query = {
      where: {
        id
      }
    }
    return City.destroy(query)
  }

  City.updateCityById = (id, data) => {
    const query = {
      where: {
        id
      },
      raw: true
    }
    return City.update(data, query)
  }

  City.findByRegionId = (regionId) => {
    const query = {
      where: {
        regionId
      },
      raw: true
    }
    return City.count(query)
  }

  return City
}
