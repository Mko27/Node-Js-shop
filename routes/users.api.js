var express = require('express')
var router = express.Router()
const UserServices = require('./services/users.service')
const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth')
const { validateUserRegistration, validateUserLogin } = require('../middlewares/validations/user.validation')
const { checkUserExist } = require('../middlewares/userExist.middlware')
const { multerImageUpload } = require('../middlewares/fileUpload.middlware')

router.get('/', 
    forwardAuthenticated,
    UserServices.loginPage)

router.get('/registration', 
    forwardAuthenticated,
    UserServices.registrationPage)

router.get('/home', 
    ensureAuthenticated, 
    UserServices.userPage    
)

router.get('/logout', 
    UserServices.userLogout)

router.post('/registration',
    multerImageUpload,
    validateUserRegistration,
    checkUserExist, 
    UserServices.userRegistration)

router.post('/', 
    validateUserLogin, 
    UserServices.userLogin)

module.exports = router;