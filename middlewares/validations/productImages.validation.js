const Joi = require('joi')

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {

    validateProductImages: (req, file, next) => {
      console.log('valid ', req.files)
      ValidatorUtil.validateFiles({ images: req.files }, 
        Joi.object({ 
          images: Joi.array().items(
            Joi.object({
        
          filename: Joi.string(),
          fieldname: Joi.string().valid('images'),
          originalname: Joi.string(),
          encoding: Joi.string().required(),
          destination: Joi.string().required(),
          path: Joi.string().required(),
          basePath: Joi.string().required(),
          originalWidth: Joi.number().positive().max(1024).required(),
          originalHeight: Joi.number().positive().max(1024).required(),
          size: Joi.number().min(0).max(1000000),
          mimetype: Joi.string().valid('image/png', 'image/jpeg', 'image/jpg')
      }))})
      , next)
    }
  
  }