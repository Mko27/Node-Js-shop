const Joi = require('joi')

const MAX_INT_VALUE = 2147483647

const ValidatorUtil = require('../../utils/validator.util')

module.exports = {
  /**
   * Check the arguments for get font groups list.
   */
  // validateListFontGroupsArgs: (req, res, next) => {
  //   console.log('start validation')
  //   ValidatorUtil.validate({ query: req.query, body: req.body, params: req.params },
  //     Joi.object({
  //       query: {
  //         limit: Joi.number().positive().max(MAX_INT_VALUE).integer(),
  //         offset: Joi.number().min(0).max(MAX_INT_VALUE).integer(),
  //         templateId: Joi.number().positive().max(MAX_INT_VALUE).integer()
  //       }
  //     })
  //     , next)
  // },

  validateCreateRegion: (req, res, next) => {
    console.log('start region validation')
    ValidatorUtil.validate({ body: req.body }, Joi.object({
      body: {
        name: Joi.string().required()
      }
    })
    , next)
  },

  validateIdRegion: (req, res, next) => {
    console.log('start find id validation')
    console.log('|||||||||||||||| ', req.params)
    ValidatorUtil.validate({ params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer()
      }
    }), next)
  },

  validateRegionUpdateParams: (req, res, next) => {
    console.log('start update validation')
    ValidatorUtil.validate({ body: req.body, params: req.params }, Joi.object({
      params: {
        id: Joi.number().positive().max(MAX_INT_VALUE).integer()
      },

      body: {
        name: Joi.string().required()
      }
    }), next)
  }

}
