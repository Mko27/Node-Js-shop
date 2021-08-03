var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')
const { handleError } = require('../../middlewares/validations/error-handler.middleware')
const { validateListFontGroupsArgs } = require('../../middlewares/validations/region.validation')
// const RegionError = require('../../middlewares/validations/RegionError')
// const RegValidation = require('../../middlewares/validations/RegValidation')


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
      .then(() => res.render('regions'))
      .catch(next)
}

const getRegionById = async (req, res, next) => {
    const data = req.body;
    const result = await RegValidation.idVal.validateAsync(data)
                              .then(() => Region.findById(data.id)
                                .then(region => res.json(region))
                                .catch(err => console.log(err)))
                              .catch(err => next(RegionError.invalidInput(err.message)))
}

const deleteRegionById = async (req, res, next) => {
    const data = req.body;

    const result = await RegValidation.idVal.validateAsync(data)
                            .then(() => Region.delete(data.id).then(() => Region.getRegions()
                              .then(regs => {
                                const names = regs.map(reg => reg.dataValues.name);                    
                                return res.render('regions', {regions: names})})
                                  .catch(err => console.log(err)))
                              .catch(err => console.log(err)))
                            .catch((err) => next(RegionError.invalidInput(err.message)))
}

module.exports = {
    getAllRegions,
    addRegion,
    getRegionById,
    deleteRegionById
}