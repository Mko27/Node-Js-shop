const models = require('../models')
const { City } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError } = ErrorsUtil

module.exports = {
  checkCityName: (req, res, next) => {
    console.log('check')
    const name = req.body.name
    console.log('req name ', name)

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
