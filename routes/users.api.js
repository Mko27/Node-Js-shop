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

router.post('/add', (req, res) => {
  return Region.add().then(reg => res.json(reg));
})  

router.get('/:id', (req, res) => {
  const { id } = req.params;

  return Region.findById(id).then(region => res.json(region));
})

//console.log(inputValue);
module.exports = router;
