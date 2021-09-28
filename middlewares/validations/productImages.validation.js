const Joi = require('joi')

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateProductImages: (req, res, next) => {
    ValidatorUtil.validateFiles({ images: req.files, params: req.params },
      Joi.object({
        params: {
          id: Joi.number().positive().integer().required()
        },
        images: Joi.array().items(
          Joi.object({

            filename: Joi.string().required(),
            fieldname: Joi.string().valid('images').required(),
            originalname: Joi.string().required(),
            encoding: Joi.string().required(),
            destination: Joi.string().required(),
            path: Joi.string().required(),
            basePath: Joi.string().required(),
            originalWidth: Joi.number().positive().required(),
            originalHeight: Joi.number().positive().required(),
            size: Joi.number().min(0).max(1000000).required(),
            mimetype: Joi.string().valid('image/png', 'image/jpeg', 'image/jpg').required()
          })) })
      , next)
  }

}
