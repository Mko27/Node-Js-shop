const Joi = require('joi')

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

  validateUserImage: (req, file, next) => {
    ValidatorUtil.validateFile({ image: req.file }, Joi.object({
      image: {
        filename: Joi.string(),
        fieldname: Joi.string().valid('image'),
        originalname: Joi.string(),
        encoding: Joi.string(),
        destination: Joi.string(),
        path: Joi.string(),
        size: Joi.number().min(0).max(1000),
        mimetype: Joi.string().valid('image/png', 'image/jpeg', 'image/jpg')
      }
    })
    , next)
  }

}
