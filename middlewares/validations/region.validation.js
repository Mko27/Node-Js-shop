const Joi = require('joi')


const ValidatorUtil = require('../../utils/validator.util')

module.exports = {
  /**
   * Check the arguments for get font groups list.
   */
  validateListFontGroupsArgs: (req, res, next) => {
    console.log('start validation')
    ValidatorUtil.validate({ query: req.query, body: req.body, params: req.params },
      Joi.object({
        query: {
          limit: Joi.number().positive().max(5).integer(),
          offset: Joi.number().min(0).max(5).integer(),
          templateId: Joi.number().positive().max(5).integer()
        }
      })  
      , next)
  },

  validateCreateRegion: (req, res, next) => {
    console.log('start region validation')
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().required(),
      }
    })
    , next)
  },

  validateIdRegion: (req, res, next) => {
    console.log('start id validation')
    console.log('|||||||||||||||| ', req.params)
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number(),
        name: Joi.string()
      },
      
      body: {
        id: Joi.number()
      }
    }), next)
  }
}
