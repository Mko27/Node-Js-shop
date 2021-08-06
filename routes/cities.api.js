var express = require('express');
var router = express.Router();
const CityServices = require('./services/cities.service')

router.get('/',
    CityServices.getAllCities)

module.exports = router;
