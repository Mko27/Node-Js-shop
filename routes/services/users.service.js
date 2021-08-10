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
        return User.registration(data).then(() => res.send('Registered')).catch(next)
    }
}

const userById = (req, res, next) => {
    const data = req.params

    return User.findById(data.id).then((user) =>{console.log('(()) ', user) ;return res.send(user)}).catch(next)
}

const userLogin = (req, res, next) => {
    const data = req.query
    console.log('data email === ', data.email)
    console.log('get query === ', data)
    return User.findByEmail(data.email).then((user) => {
        console.log('user === ', user)
        if(bcrypt.compareSync(data.password, user.hash))
            return res.send("Loged")
        next()
    })
    .catch(next)
}

const getUsers = (req, res, next) => {
    return User.getUsers().then((users) => console.log('######## ',users)).catch(next)
}

module.exports = {
    userRegistration,
    userLogin,
    userById,
    getUsers
}