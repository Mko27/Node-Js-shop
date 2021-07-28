var express = require('express');
var router = express.Router();
const db = require('../config/index');
const  models = require('../models');
const {Region} = models
console.log('Region: ', Region)
const Sequelize = require('sequelize');
const { promisify } = require('bluebird');
const Op = Sequelize.Op;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('regions')

  // return Region.getRegions()
  // .then(region => {
  //   const instance = region;
  //   console.log(instance.name)
  //   console.log("????????????????????", region)
  //   return res.render('users'/*, {reg: region}*/)})
  // .catch(err => res.render('error', {error: err}))
});

router.post('/delete', function(req, res){

})

router.get('/all', (req, res) => {
  return Region.getRegions()
  .then(region => {
    //console.log('region: ', region)
    return res.json(region)})
  .catch(err => res.render('error', {error: err}))
})

router.post('/add', (req, res) => {
  const name = req.body;
  
  if(name.data == '')
    return res.write("<p>Go back and please insert name</p>")

  return Region.add(`{${name.data}}`).then(reg => res.json(reg)).catch(err => console.log(err));
})  

router.get('/:id', (req, res) => {
  const { id } = req.params;

  return Region.findById(id)
  .then(region => res.json(region))
  .catch(err => console.log(err));
})

//console.log(inputValue);
module.exports = router;
