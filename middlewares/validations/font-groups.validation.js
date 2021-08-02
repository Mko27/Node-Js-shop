const Joi = require('joi')



const ValidatorUtil = require('../../utils/validator.util')

module.exports = {
  /**
   * Check the arguments for get font groups list.
   */
  validateListFontGroupsArgs: (req, res, next) => {
    ValidatorUtil.validate({ query: req.query, params: req.params, body: req.body },
      {
        query: {
          limit: Joi.number().positive().max(API_LIMIT_MAX_VALUE).integer(),
          offset: Joi.number().min(0).max(DB_INTEGER_MAX_VALUE).integer(),
          templateId: Joi.number().positive().max(DB_INTEGER_MAX_VALUE).integer()
        },
        body: {

        },
        params: {
          
        }
      }, next)
  }
}
