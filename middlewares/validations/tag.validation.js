const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {
  validateCreateTag: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        slug: Joi.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/).required(),
        title: Joi.string().min(3).max(15).required()
      }
    })
    , next)
  },

  validateIdTag: (req, res, next) => {
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
      }
    }), next)
  },

  validateTagUpdateParams: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
      },

      body: {
        slug: Joi.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/).required(),
        title: Joi.string().min(3).max(15).required()
      }
    }), next)
  }

}
