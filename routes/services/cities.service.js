const  models = require('../../models');
const {City, Region} = models

const getAllCities = (req, res, next) => {
    return City.getCities()
      .then(cities => {
        console.log(cities)
        return res.render('cities', {cities})
      })
      .catch(err => console.log(err))
}

const getCityById = (req, res, next) => {
  const data = req.params;
  return City.findById(data.id)
    .then(city => res.render('city', { elem: city.name }))
    .catch(next)
}

const createCity = (req, res, next) => {
  const data = req.body;
  console.log('data ', data)
  console.log("ID : ", data.RegionId)
  
  return City.createCity(data)
    .then(() => res.redirect('/cities'))
    .catch(next)
}

const deleteCityById = (req, res, next) => {
  const data = req.params;
  console.log('================= ', data)
  return City.deleteCityById(data.id)
    .then(() => res.json({msg: "Successfully deleted"}))
    .catch(next)
}

const updateCityById = (req, res, next) => {
  const data = req.params;
  console.log('req.params ======', data)
  const elem = req.body;
  console.log('elem ===== ', elem)
  return City.updateCityById(data.id, elem)
    .then(() => res.json({msg: "Successfully updated"}))
    .catch(next)
}

const appendRegions = (req, res ,next) => {
  return Region.getRegions().then((regions) => {
    res.locals.__regions = regions
    next()
  }).catch(next)
}

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    deleteCityById,
    updateCityById,
    appendRegions
}