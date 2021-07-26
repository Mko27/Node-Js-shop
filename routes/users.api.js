var express = require('express');
var router = express.Router();
const db = require('../config/index');
const Region = require('../models/region');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const pug = require;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
});

router.get('/', (req, res) => 
  Region.findAll()
    .then(usersapi => res.render('users.api', {
        usersapi
      }))
    .catch(err => res.render('error', {error: err})));

router.post('/add', (req, res) => {
  let regionName = req.query;
  Region.create({
    regionName
  })
    .then(regName => res.redirect('/user.api'))
    .catch(err => res.render('error', {error:err.message}))
})

module.exports = router;
