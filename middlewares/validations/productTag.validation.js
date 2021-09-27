const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {
    validateCreateOrDeleteProductTag: (req, res, next) => {
      ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
        body: {
          tagId: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
        },
        params: {
            id: Joi.number().positive().max(MAX_INT_VALUE).integer().required()
        }
      })
      , next)
    }
}