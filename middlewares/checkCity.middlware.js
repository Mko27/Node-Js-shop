const models = require('../models')
const { City } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError } = ErrorsUtil

module.exports = {
  checkCityName: (req, res, next) => {
    const name = req.body.name

    return City.findByName(name)
      .then((city) => {
        if (city) {
          return next(new ExistNameError('This name exist'))
        }

        return next()
      })
      .catch(next)
  }
}
