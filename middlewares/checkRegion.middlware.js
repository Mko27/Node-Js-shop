const models = require('../models')
const { Region, City } = models
const { ErrorsUtil } = require('../utils/index')
const { ExistNameError, RegionDeleteError } = ErrorsUtil

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
  },

  checkRegionDelete: (req, res, next) => {
    const regionId = req.params.id

    return City.findByRegionId(regionId)
      .then((cities) => {
        if (cities.count > 0) {
          return next(new RegionDeleteError('This region has cities'))
        }
      })
      .catch(next)
  }
}
