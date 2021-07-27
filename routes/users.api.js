var express = require('express');
var router = express.Router();
const db = require('../config/index');
const  models = require('../models');
const {Region} = models
console.log('Region: ', Region)
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET users listing. */
//  router.get('/', function(req, res, next) {
// res.render('users')
// });

router.get('/', (req, res) => {
  return Region.getRegions()
  .then(usersapi => {
    console.log('usersapi: ', usersapi)
    return res.render('users', {
      usersapi
    })})
  .catch(err => res.render('error', {error: err}))
})


router.post('/add', (req, res) => {
  return Region.add();
})

router.get('/:id', (req, res) => {
  return Region.findById();
})

module.exports = router;
