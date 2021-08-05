const  models = require('../../models');
const {Region} = models

const getAllRegions = (req, res) =>{
    return Region.getRegions()
    .then(regions => {
      console.log(regions)
      return res.render('regions', {regions})
    })
    .catch(err => console.log(err))
}

const  regionCreate = (req, res, next) => {
    console.log(req.body)
    const data = req.body;
    console.log("data: ", data)
    return Region.createRegion(data)
      .then(() => res.render('regionAdd', {msg: 'Successfully added'}))
      .catch(next)
}

const getRegionById = (req, res, next) => {
    const data = req.params;
    return Region.findById(data.id)
      .then(region => res.render('region', { elem: region.name }))
      .catch(next)
}

const deleteRegionById = (req, res, next) => {
    const data = req.params;
    console.log('================= ', data)
    return Region.deleteRegionById(data.id)
      .then(() => res.render('regions'))
      .catch(next)
}

const updateRegionById = (req, res, next) => {
  const data = req.params;
  console.log('req.params ======', data)
  const elem = req.body;
  console.log('elem ===== ', elem)
  return Region.updateRegionById(data.id, elem)
    .then(() => res.render('update.pug', {msg: 'Succsessfully updated'}))
    .catch(next)
}

module.exports = {
    getAllRegions,
    regionCreate,
    getRegionById,
    deleteRegionById,
    updateRegionById
}