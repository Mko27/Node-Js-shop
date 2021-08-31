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
    console.log('Get Cities')
    const query = {
      raw: true
    }
    return City.findAll()
  }

  City.createCity = (city) => {
    console.log('City created')
    return City.create(city)
  }

  City.deleteCityById = (id) => {
    const query = {
      where: {
        id
      },
      raw: true
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

  return City
}
