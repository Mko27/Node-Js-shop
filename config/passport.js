const LocalStrategy = require('passport-local').Strategy
const models = require('../models')
const {User} = models
const bcrypt = require('bcrypt')

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, next) => {
            User.findByEmail(email)
                .then(user => {
                    if(user == null){
                        console.log('not user')
                        return next();
                    } 
                    if(bcrypt.compareSync(password, user.hash))
                        console.log('Ok')
                    else
                        console.log('fail')
                })
                .catch(next)
        })
    )
}