var express = require('express');
var router = express.Router();
const db = require('../config/index');
const  models = require('../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const RegionServices = require('./services/regions.service')
//const RegionValidation = require('../middlewares/validations/RegionValidation')

/* GET users listing. */

router.get('/', RegionServices.getAllRegions);

router.post('/add', RegionServices.addRegion)  

router.get('/:id', RegionServices.getRegionById)

router.post('/delete', RegionServices.deleteRegionById)

module.exports = router;
