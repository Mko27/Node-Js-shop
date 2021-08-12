const LocalStrategy = require('passport-local').Strategy
const models = require('../models')
const {User} = models
const bcrypt = require('bcrypt')

module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        console.log('serialize')
        done(null, user.id);
    });
      
    passport.deserializeUser((id, done) => {
        console.log('deserialize')
        User.findById(id).then((user) => done(null, user)).catch(done)
    });

    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            console.log('local')
            User.findByEmail(email)
                .then(user => {
                    if (!user) {
                        console.log('not user')

                        return done(null, false, {message: 'Not user with that email'});
                    } 
                    if (!bcrypt.compareSync(password, user.hash)){
                        console.log('false')
                        
                        return done(null, false, {message: 'Incorrect password'})
                    }
                    console.log('ok')
                    return done(null, user)
                })
                .catch(done)
        })
    )
}