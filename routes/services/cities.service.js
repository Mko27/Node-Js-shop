const models = require('../../models')
const { City, Region } = models

const getAllCities = (req, res, next) => {
  return City.getCities()
    .then(cities => res.render('cities', { cities }))
    .catch(next)
}

const getCityById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)
  return City.findById(data)
    .then(city => res.render('city', { elem: city.name }))
    .catch(next)
}

const createCity = (req, res, next) => {
  const data = req.body

  return City.createCity(data)
    .then(() => res.redirect('/cities'))
    .catch(next)
}

const deleteCityById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)

  return City.deleteCityById(data)
    .then(() => res.json({ msg: 'Successfully deleted' }))
    .catch(next)
}

const updateCityById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)
  const elem = req.body

  return City.updateCityById(data, elem)
    .then(() => res.json({ msg: 'Successfully updated' }))
    .catch(next)
}

const appendRegions = (req, res, next) => {
  return Region.getRegions()
    .then((regions) => {
      res.locals.__regions = regions
      next()
    }).catch(next)
}

module.exports = {
  getAllCities,
  getCityById,
  createCity,
  deleteCityById,
  updateCityById,
  appendRegions
}
