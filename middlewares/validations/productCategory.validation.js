const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateDeleteOrCreateProductCategory: (req, res, next) => {
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      body: {
        categoryId: Joi.number().positive().integer().max(MAX_INT_VALUE).required()
      },
      params: {
        id: Joi.number().positive().integer().max(MAX_INT_VALUE).required()
      }
    })
    , next)
  }

}
