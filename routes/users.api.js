var express = require('express');
var router = express.Router();
const path = require('path')
const UserServices = require('./services/users.service')
const passport = require('passport')
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth')
const { validateUserRegistration, validateUserLogin } = require('../middlewares/validations/user.validation') 
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const type = upload.single('pic')

router.get('/', forwardAuthenticated,(req, res, next) => {
    res.render('users')
})

router.get('/registration', forwardAuthenticated,(req, res, next) => {
    res.render('usersRegistration')
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

router.post('/registration',(req, res, next) => {
    console.log(req.body)
}, 
    validateUserRegistration,
    type, 
    UserServices.userRegistration)

router.post('/', 
    validateUserLogin, 
    (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/users/home',
        failureRedirect: '/users/failed',
        session: true,
        failureFlash: true
    })(req, res, next)
})

module.exports = router;