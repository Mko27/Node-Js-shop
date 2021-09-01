const Joi = require('joi')

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateUserRegistration: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().min(3).max(50).required(),
        surname: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        password: Joi.string().min(3).max(60).required(),
        password_confirm: Joi.ref('password')
      }
    })
    , next)
  },

  validateUserLogin: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(60).required()
      }
    })
    , next)
  }

}
