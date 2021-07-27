var express = require('express');
var router = express.Router();
const db = require('../config/index');
const  models = require('../models');
const {Region} = models
console.log('Region: ', Region)
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
});

// router.get('/', (req, res) => {
//   return Region.getRegions()
//   .then(region => {
//     console.log('region: ', region)
//     return res.json(region)})
//   .catch(err => res.render('error', {error: err}))
// })


router.get('/:name', (req, res) => {
  let {name} = req.params;
  return Region.add(`{${name}}`).then(reg => res.json(reg));
})  

router.get('/:id', (req, res) => {
  let { id } = req.params;

  return Region.findById(id).then(region => res.json(region));
})

module.exports = router;
