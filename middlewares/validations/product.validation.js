const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateCreateProduct: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(15).max(450).required(),
        price: Joi.number().positive(),
        address: Joi.string().min(3).max(60).required(),
        brand: Joi.string().min(3).max(60).required(),
        model: Joi.string().min(3).max(60).required(),
        // status: Joi.string().valid('Unpublished').required(),
        CityId: Joi.number().positive().integer()
      }
    })
    , next)
  },

  validateIdProduct: (req, res, next) => {
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer()
      }
    })
    , next)
  },

  validateUpdateProduct: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer()
      },

      body: {
        name: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(15).max(450).required(),
        price: Joi.number().positive(),
        address: Joi.string().min(3).max(60).required(),
        brand: Joi.string().min(3).max(60).required(),
        model: Joi.string().min(3).max(60).required(),
        status: Joi.string().valid('Published', 'Unpublished').required(),
        CityId: Joi.number().positive().integer(),
        CategoryId: Joi.number().positive().integer()
      }
    })
    , next)
  }

}
