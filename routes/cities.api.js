var express = require('express');
var router = express.Router();
const CityServices = require('./services/cities.service')
const { validateIdCity, validateCreateCity, validateCityUpdateParams } = require('../middlewares/validations/city.validation')

router.get('/',
    CityServices.appendRegions,
    CityServices.getAllCities)

router.get('/add', 
    CityServices.appendRegions,
     (req, res, next) => {
        return res.render('cityAdd')
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
