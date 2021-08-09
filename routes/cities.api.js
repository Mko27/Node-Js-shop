var express = require('express');
var router = express.Router();
const CityServices = require('./services/cities.service')
const { validateIdCity, validateCreateCity, validateCityUpdateParams } = require('../middlewares/validations/city.validation')
const models = require('../models')
const {Region} = models

router.get('/',
    CityServices.getAllCities)

router.get('/add', function (req, res, next) {
    return Region.getRegions().then(regions => res.render('cityAdd', {regions}))
    //res.render('cityAdd')
})

router.get('/:id',
    validateIdCity,
    CityServices.getCityById)

router.post('/',
    validateCreateCity,
    CityServices.createCity)

router.delete('/:id',
    validateIdCity,
    CityServices.deleteCityById)

router.patch('/:id',
    validateCityUpdateParams,
    CityServices.updateCityById)

module.exports = router;
