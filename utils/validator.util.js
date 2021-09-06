const { VALIDATIONS } = require('../config')
const { DEFAULT_OPTIONS } = VALIDATIONS

const { ErrorsUtil } = require('./index')
const { ValidationError } = ErrorsUtil
const fs = require('fs')

class ValidatorUtil {
  /**
   * @param {Object} args
   * @param {Object} schema
   * @param {Function} next
   * @return {*}
   * @description Validate input with given schema.
   */
  static validate (args, schema, next) {
    const { error } = schema.validate(args, DEFAULT_OPTIONS)
    console.log('+++++++++++++++++', error)
    if (error) {
      const msg = error && error.details && error.details[0] && error.details[0].message
      console.log(error)
      return next(new ValidationError(msg))
    }
    next()
  }

  static validateFile (args, schema, next) {
    const { error } = schema.validate(args, DEFAULT_OPTIONS)
    console.log('+++++++++++++++++', error)
    if (error) {
      const msg = error && error.details && error.details[0] && error.details[0].message
      console.log(error)

      console.log('args ', args.image.path)

      fs.unlink(args.image.path, (err) => {
        if (err) {
          console.error(err)
        }

        console.log('Delete file')
      })

      return next(new ValidationError(msg))
    }
    next()
  }
}

module.exports = ValidatorUtil
