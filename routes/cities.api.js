var express = require('express')
var router = express.Router()
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
    checkCityName,
    validateCreateCity,
    CityServices.createCity)

router.delete('/:id',
    validateIdCity,
    CityServices.deleteCityById)

router.patch('/:id',
    checkCityName,
    validateCityUpdateParams,
    CityServices.updateCityById)

module.exports = router;
