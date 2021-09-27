const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateCreateCity: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().required(),
        regionId: Joi.number().positive().integer().max(MAX_INT_VALUE).required()
      }
    })
    , next)
  },

  validateIdCity: (req, res, next) => {
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().max(MAX_INT_VALUE).integer().required()
      }
    }), next)
  },

  validateCityUpdateParams: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
      },

      body: {
        name: Joi.string().required(),
        regionId: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
      }
    }), next)
  }

}
