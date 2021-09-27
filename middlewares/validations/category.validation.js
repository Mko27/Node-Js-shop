const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateCreateCategory: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().required(),
        slug: Joi.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/).required(),
        description: Joi.string().required(),
        status: Joi.number().integer().valid(0,1).required(),
        parentId: Joi.number().integer().max(MAX_INT_VALUE).required()
      }
    })
    , next)
  },

  validateIdCategory: (req, res, next) => {
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().max(MAX_INT_VALUE).integer().positive().required()
      }
    }), next)
  },

  validateCategoryUpdateParams: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
      },

      body: {
        name: Joi.string().required(),
        slug: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.number().integer().min(0).max(1).required(),
        parentId: Joi.number().max(MAX_INT_VALUE).integer().allow('').required()
      }
    }), next)
  },

  validateCategoryList: (req, res, next) => {
    ValidatorUtil.validate({ query: req.query },
      Joi.object({
        query: {
          size: Joi.number().positive().max(100).integer(),
          page: Joi.number().min(0).max(MAX_INT_VALUE).integer(),
          name: Joi.string().allow('')
        }
      })
      , next)
  }

}
