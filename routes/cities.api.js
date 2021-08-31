const express = require('express')
const router = express.Router()
const CityServices = require('./services/cities.service')
const { checkCityName } = require('../middlewares/checkCity.middlware')
const { validateIdCity, validateCreateCity, validateCityUpdateParams } = require('../middlewares/validations/city.validation')

router.get('/',
  CityServices.appendRegions,
  CityServices.getAllCities)

router.get('/:id',
  validateIdCity,
  CityServices.getCityById)

router.post('/',
  validateCreateCity,
  checkCityName,
  CityServices.createCity)

router.delete('/:id',
  validateIdCity,
  CityServices.deleteCityById)

router.patch('/:id',
  validateCityUpdateParams,
  checkCityName,
  CityServices.updateCityById)

module.exports = router
