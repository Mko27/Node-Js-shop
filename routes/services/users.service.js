const models = require('../../models')
const { User, Product } = models
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
  const data = req.body
  data.salt = bcrypt.genSaltSync(10)
  data.hash = bcrypt.hashSync(data.password, data.salt)
  if (req.file) {
    data.image = req.file.path
  }

  return User.registration(data)
    .then(() => res.send('Registered'))
    .catch((error) => {
      console.log('Error...... ', error)
      return next()
    })
}

const userById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)

  return User.findById(data)
    .then((user) => {
      return res.send(user)
    })
    .catch(next)
}

const userByEmail = (req, res, next) => {
  const data = req.body

  return User.findByEmail(data.email)
    .then((user) => {
      return user
    })
    .catch(next)
}

const getUsers = (req, res, next) => {
  return User.getUsers()
    .then((users) => res.send(users))
    .catch(next)
}

const createAnnouncement = (req, res, next) => {
  const data = req.body
  data.userId = req.user.id
  if (data.status === 'Published') {
    data.publishedAt = new Date()
  }

  return Product.createProduct(data)
    .then(() => res.redirect('/users/add'))
    .catch(next)
}

const getAnnouncements = (req, res, next) => {
  const userId = req.user.id

  return Product.findByUserId(userId)
    .then((announcements) => res.render('userAnnouncements', { announcements: announcements.rows }))
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
  getAnnouncements
}
