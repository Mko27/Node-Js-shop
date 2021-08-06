const  models = require('../../models');
const {City} = models

const getAllCities = (req, res, next) =>{
    return City.getCities()
    .then(cities => {
      return console.log(cities)
    })
    .catch(err => console.log(err))
}


module.exports = {
    getAllCities
}