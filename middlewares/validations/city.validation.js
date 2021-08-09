const Joi = require('joi')

const MAX_INT_VALUE = 2147483647;

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateCreateCity: (req, res, next) => {
    console.log('start region validation')
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().required(),
        RegionId: Joi.number().positive().integer().max(MAX_INT_VALUE)
      }
    })
    , next)
  },

  validateIdCity: (req, res, next) => {
    console.log('start find id validation')
    console.log('|||||||||||||||| ', req.params)
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().max(MAX_INT_VALUE).integer()
      }
    }), next)
  },

  validateCityUpdateParams: (req, res, next) => {
    console.log('start update validation')
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer()
      },

      body: {
        name: Joi.string().required()
      }
    }), next)
  }

}