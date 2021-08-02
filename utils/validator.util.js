const Joi = require('joi')

const { VALIDATIONS } = require('../config')
const { DEFAULT_OPTIONS } = VALIDATIONS

const { ErrorsUtil } = require('../utils')
const { InputValidationError } = ErrorsUtil

class ValidatorUtil {
  /**
   * @param {Object} args
   * @param {Object} schema
   * @param {Function} next
   * @return {*}
   * @description Validate input with given schema.
   */
  static validate (args, schema, next) {
    const { error } = Joi.validate(args, schema, DEFAULT_OPTIONS)

    if (error) {
      const msg = error && error.details && error.details[0] && error.details[0].message
      return next(new InputValidationError(msg))
    }
    next()
  }
}

module.exports = ValidatorUtil
