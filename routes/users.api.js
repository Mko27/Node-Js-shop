const express = require('express')
const router = express.Router()
const UserServices = require('./services/users.service')
const { forwardAuthenticated, ensureAuthenticated } = require('../lib/auth')
const { validateUserRegistration, validateUserLogin } = require('../middlewares/validations/user.validation')
const { checkUserExist } = require('../middlewares/userExist.middlware')
const { multerImageUpload } = require('../middlewares/fileUpload.middlware')
const { validateUserImage } = require('../middlewares/validations/file.validation')

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
  validateUserImage,
  validateUserRegistration,
  checkUserExist,
  UserServices.userRegistration)

router.post('/',
  validateUserLogin,
  UserServices.userLogin)

module.exports = router
