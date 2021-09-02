const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateCreateCategory: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().required(),
        slug: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.number().integer().min(0).max(1),
        parentId: Joi.number().integer().max(MAX_INT_VALUE).allow('')
      }
    })
    , next)
  },

  validateIdCategory: (req, res, next) => {
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().max(MAX_INT_VALUE).integer().positive()
      }
    }), next)
  },

  validateCategoryUpdateParams: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer()
      },

      body: {
        name: Joi.string().required(),
        slug: Joi.string().required(),
        description: Joi.string().required(),
        status: Joi.number().integer().min(0).max(1),
        parentId: Joi.number().max(MAX_INT_VALUE).integer().allow('')
      }
    }), next)
  },

  validateCategoryList: (req, res, next) => {
    console.log('start validation')
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
