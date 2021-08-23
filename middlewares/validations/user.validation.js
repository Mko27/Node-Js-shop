const Joi = require('joi')

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateUserRegistration: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
        body: {
          name: Joi.string().required(),
          surname: Joi.string().required(),
          email: Joi.string().email().required(),
          phone: Joi.string().required(),
          password: Joi.string().required(),
          password_confirm: Joi.ref('password')
        }
      })
      , next)
  },

  validateUserLogin: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    })
    , next)
  }

}