const models = require('../../models')
const { User, City, Product } = models
const bcrypt = require('bcrypt')
const passport = require('passport')

const loginPage = (req, res, next) => {
  return res.render('users')
}

const registrationPage = (req, res, next) => {
  return res.render('usersRegistration')
}

const userPage = (req, res, next) => {
  return res.render('userPage')
}

const createAnnouncementForm = (req, res, next) => {
  return res.render('createAnnouncement')
}

const userLogin = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/users/home',
    failureRedirect: '/users/',
    session: true,
    failureFlash: true
  })(req, res, next)
}

const userLogout = (req, res, next) => {
  req.logout()
  res.redirect('/users')
}

const userRegistration = (req, res, next) => {
  console.log('file ', req.file)
  const data = req.body
  data.salt = bcrypt.genSaltSync(10)
  data.hash = bcrypt.hashSync(data.password, data.salt)

  if (req.file) {
    data.image = req.file.path
  }

  console.log(data)

  return User.registration(data)
    .then(() => res.send('Registered'))
    .catch(next)
}

const userById = (req, res, next) => {
  const data = req.params

  return User.findById(data.id)
    .then((user) => {
      console.log('(()) ', user)
      return res.send(user)
    })
    .catch(next)
}

const userByEmail = (req, res, next) => {
  const data = req.body

  return User.findByEmail(data.email)
    .then((user) => {
      console.log(user)
      return user
    })
    .catch(next)
}

const getUsers = (req, res, next) => {
  return User.getUsers()
    .then((users) => res.send(users))
    .catch(next)
}

const appendCities = (req, res, next) => {
  return City.getCities()
    .then((cities) => {
      res.locals.__cities = cities
      next()
    })
    .catch(next)
}

const createAnnouncement = (req, res, next) => {
  const data = req.body
  data.UserId = req.user.id
  if (data.status === 'Published') {
    data.publishedAt = new Date()
  }
  console.log('User Id', data.UserId)

  return Product.createProduct(data)
    .then(() => res.redirect('/users/add'))
    .catch(next)
}

module.exports = {
  userRegistration,
  userById,
  getUsers,
  userByEmail,
  loginPage,
  registrationPage,
  userPage,
  userLogout,
  userLogin,
  createAnnouncementForm,
  createAnnouncement,
  appendCities
}
