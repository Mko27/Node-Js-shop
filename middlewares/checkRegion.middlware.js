const models = require('../models')
const { Region } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError } = ErrorsUtil

module.exports = {
  checkRegionName: (req, res, next) => {
    console.log('check')
    const name = req.body.name
    console.log('req name ', name)

    return Region.findByName(name)
      .then((region) => {
        if (region) {
          return next(new ExistNameError('This name exist'))
        }

        return next()
      })
      .catch(next)
  }
}
