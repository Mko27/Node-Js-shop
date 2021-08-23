const models = require('../../models')
const { User } = models
const bcrypt = require('bcrypt');

const { ErrorsUtil } = require('../../utils/index')
const { ExistMailError } = ErrorsUtil

const checkUserExist = (req, res, next) => {
    console.log('check')
    const email = req.body.email
    console.log('req email ', email)
    
    return User.findByEmail(email)
        .then((user) => {
            console.log('find email')
            if (user) {
                console.log('error')
                return next(new ExistMailError('This user exist'))
            }

            console.log('user not')
            return next()
        })
        .catch(next)
}

const userRegistration = (req, res, next) => {
    //console.log('file ', req.file)
    console.log('reg')
    const data = req.body
    data.image = req.file.path

    data.salt = bcrypt.genSaltSync(10);
    data.hash = bcrypt.hashSync(data.password, data.salt);
    console.log('data === ', data)

    return User.registration(data)
               .then(() => res.send('Registered'))
               .catch(next)
}

const userById = (req, res, next) => {
    const data = req.params

    return User.findById(data.id)
        .then((user) => { 
            console.log('(()) ', user); 
            return res.send(user)})
        .catch(next)
}

const userByEmail = (req, res, next) => {
    const data = req.body

    return User.findByEmail(data.email)
        .then((user) => { console.log(user); return user })
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
    userByEmail,
    checkUserExist
}