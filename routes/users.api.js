var express = require('express');
var router = express.Router();
const UserServices = require('./services/users.service')
const passport = require('passport')
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth')

router.get('/', forwardAuthenticated,(req, res, next) => {
    res.render('users')
})

router.get('/registration', forwardAuthenticated,(req, res, next) => {
    res.render('usersRegistration')
})

router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/users/home',
        failureRedirect: '/users/failed',
        session: true,
        failureFlash: true
    })(req, res, next)
})

router.get('/home', ensureAuthenticated,(req, res, next) =>{
    res.send('Welcome your page')
})

router.get('/page',ensureAuthenticated,(req, res, next) =>{
    res.send('You are loged')
})

router.get('/failed', (req, res ,next) => {
    res.send('Incorrect email or password')
})

router.post('/registration', UserServices.userRegistration)

module.exports = router;