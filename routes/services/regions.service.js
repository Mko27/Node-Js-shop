const models = require('../../models')
const { Region } = models

const getAllRegions = (req, res, next) => {
  return Region.getRegions()
    .then(regions => res.render('regions', { regions }))
    .catch(next)
}

const regionCreate = (req, res, next) => {
  const data = req.body
  return Region.createRegion(data)
    .then(() => res.redirect('/reg'))
    .catch(next)
}

const getRegionById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)
  return Region.findById(data)
    .then(region => res.render('region', { elem: region.name }))
    .catch(next)
}

const deleteRegionById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)

  return Region.deleteRegionById(data)
    .then(() => res.json({ msg: 'Successfully deleted' }))
    .catch(next)
}

const updateRegionById = (req, res, next) => {
  const data = parseInt(req.params.id, 10)
  const elem = req.body

  return Region.updateRegionById(data, elem)
    .then(() => res.json({ msg: 'Successfully updated' }))
    .catch(next)
}

module.exports = {
  getAllRegions,
  regionCreate,
  getRegionById,
  deleteRegionById,
  updateRegionById
}
