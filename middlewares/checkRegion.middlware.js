const models = require('../models')
const { Region, City } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError, RegionDeleteError } = ErrorsUtil

module.exports = {
  checkRegionName: (req, res, next) => {
    const name = req.body.name

    return Region.findByName(name)
      .then((region) => {
        if (region) {
          return next(new ExistNameError('This name exist'))
        }

        return next()
      })
      .catch(next)
  },

  checkRegionDelete: (req, res, next) => {
    const regionId = parseInt(req.params.id, 10)

    return City.findByRegionId(regionId)
      .then((count) => {
        if (count > 0) {
          return next(new RegionDeleteError('This region has cities'))
        }

        return next()
      })
      .catch(next)
  }
}
