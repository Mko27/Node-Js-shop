const models = require('../models')
const { User } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistMailError } = ErrorsUtil

module.exports = {
    checkUserExist: (req, res, next) => {
        console.log('check')
        const email = req.body.email
        console.log('req email ', email)
        
        return User.findByEmail(email)
            .then((user) => {
                if (user) {
                    return next(new ExistMailError('This user exist'))
                }

                return next()
            })
            .catch(next)
    }
}