var express = require('express');
var router = express.Router();
const path = require('path')
const UserServices = require('./services/users.service')
const passport = require('passport')
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth')
const { validateUserRegistration, validateUserLogin } = require('../middlewares/validations/user.validation')
const { checkUserExist } = require('../middlewares/userExist.middlware')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('destination', { file })
        cb(null, path.resolve(__dirname, '../public/images'))
    },
    filename: (req, file, cb) => {
        console.log({ file })
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,                   
    limits: {fileSize: 1000000}
})

const multerImageUpload = upload.single('image')

router.get('/', forwardAuthenticated, (req, res, next) => {
    res.render('users')
})

router.get('/registration', forwardAuthenticated, (req, res, next) => {
    res.render('usersRegistration')
})

router.get('/home', ensureAuthenticated, (req, res, next) =>{
    res.render('userPage')
})

router.get('/page', ensureAuthenticated, (req, res, next) =>{
    res.send('You are loged')
})

router.get('/logout', (req, res, next) => {
    req.logout();
	res.redirect('/users');
})

router.post('/registration',
    multerImageUpload,
    validateUserRegistration,
    checkUserExist, 
    UserServices.userRegistration)

router.post('/', 
    validateUserLogin, 
    (req, res, next) => {
        console.log('req', req._startTime)
        passport.authenticate('local', {
            successRedirect: '/users/home',
            failureRedirect: '/users/',
            session: true,
            failureFlash: true
    })(req, res, next)
})

module.exports = router;