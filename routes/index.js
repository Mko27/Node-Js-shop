var express = require('express');
var router = express.Router();
const regionsRouter = require('./regions.api')
const citiesRouter = require('./cities.api')
const usersRouter = require('./users.api')

router.use('/reg', regionsRouter)
router.use('/cities', citiesRouter)
router.use('/users', usersRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
