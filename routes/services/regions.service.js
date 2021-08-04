const  models = require('../../models');
const {Region} = models

const getAllRegions = (req, res) =>{
    return Region.getRegions()
    .then(regs => {
      const names = regs.map(reg => reg.dataValues.name);
      return res.render('regions', {regions: names})
    })
    .catch(err => console.log(err))
}

const  addRegion = (req, res, next) => {
    console.log(req.body)
    const data = req.body;
    console.log("data: ", data)
    return Region.add(data)
      .then(() => res.render('regionAdd', {msg: 'Successfully added'}))
      .catch(next)
}

const getRegionById = (req, res, next) => {
    const data = req.params;
    return Region.findById(data.id)
      .then(region => res.json(region))
      .catch(next)
}

const deleteRegionById = (req, res, next) => {
    const data = req.body;
    console.log('================= ', req.body)
    return Region.delete(data.id)
      .then(() => res.render('regionDelete', {msg: 'Successfully deleted'}))
      .catch(next)
}

const updateRegionById = (req, res, next) => {
  const data = req.params;
  console.log('req.params ======', data)

  return Region.updateName(data.id, data.name)
    .then(() => res.render('update.pug', {msg: 'Succsessfully updated'}))
    .catch(next)
}

module.exports = {
    getAllRegions,
    addRegion,
    getRegionById,
    deleteRegionById,
    updateRegionById
}