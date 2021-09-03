const Joi = require('joi')

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
        status: Joi.string().valid('Published', 'Unpublished').required(),
        CityId: Joi.number().positive().integer()
      }
    })
    , next)
  }

}
