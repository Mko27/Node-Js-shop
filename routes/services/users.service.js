const models = require('../../models')
const {User} = models
const bcrypt = require('bcrypt');

const userRegistration = (req, res, next) => {
    const data = req.body
    if(data.password != data.password_confirm){
        next()
    } else {
        data.salt = bcrypt.genSaltSync(10);
        data.hash = bcrypt.hashSync(data.password, data.salt);
        console.log('data === ', data)
        
        return User.findByEmail(data.email)
            .then((user) => {
                if(user)
                    return next()

                return User.registration(data)
                    .then(() => res.send('Registered'))
                    .catch(next)
                })
            .catch(next)
    }
}

const userById = (req, res, next) => {
    const data = req.params

    return User.findById(data.id)
        .then((user) =>{console.log('(()) ', user) ;return res.send(user)})
        .catch(next)
}

const userByEmail = (req, res, next) => {
    const data = req.body

    return User.findByEmail(data.email)
        .then((user) => {console.log(user); return user})
        .catch(next)
}

const getUsers = (req, res, next) => {
    return User.getUsers()
        .then((users) => res.send(users))
        .catch(next)
}

module.exports = {
    userRegistration,
    userById,
    getUsers,
    userByEmail
}