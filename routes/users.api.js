var express = require('express');
var router = express.Router();
const UserServices = require('./services/users.service')
const passport = require('passport')

router.get('/', (req, res, next) => {
    res.render('users')
})

router.get('/registration', (req, res, next) => {
    res.render('usersRegistration')
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/succes',
        failureRedirect: '/failure',
        failureFlash: 'Invalid username or password.'
    })(req, res, next)
})

router.get('/get', UserServices.getUsers)

router.get('/:id', UserServices.userById)

router.post('/', UserServices.userRegistration)

module.exports = router;