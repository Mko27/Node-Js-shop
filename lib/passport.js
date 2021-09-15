const LocalStrategy = require('passport-local').Strategy
const models = require('../models')
const { User } = models
const bcrypt = require('bcrypt')

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => done(null, user)).catch(done)
  })

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findByEmail(email)
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Not user with that email' })
          }
          if (!bcrypt.compareSync(password, user.hash)) {
            return done(null, false, { message: 'Incorrect password' })
          }
          user.lastLogedAt = new Date()
          user.save()

          return done(null, user)
        })
        .catch(done)
    })
  )
}
