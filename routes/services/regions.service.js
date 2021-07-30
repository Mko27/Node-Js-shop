var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')
const RegionError = require('../../middlewares/validations/RegionError')
const RegValidation = require('../../middlewares/validations/RegValidation')

const getAllRegions = (req, res) =>{
    return Region.getRegions()
    .then(reg => {
      const names = reg.map(item => item.dataValues.name);

      return res.render('regions', {region: names})
    })
    .catch(err => console.log(err))
}

const  addRegion = async (req, res, next) => {
    const data = req.body;
    console.log("data: ", data)
    const result = await RegValidation.nameVal.validateAsync(data)
                            .then(() => Region.add(data)
                              .then(Region.getRegions()
                                .then(regs => {
                                  const names = regs.map(reg => reg.dataValues.name);                      
                                  return res.render('regions', {region: names})})
                                .catch(err => console.log(err)))
                              .catch(err => console.log(err)))
                            .catch(err => next(RegionError.badRequest(err.message)))
}

const getRegionById = async (req, res, next) => {
    const data = req.body;
    const result = await RegValidation.idVal.validateAsync(data)
                              .then(() => Region.findById(data.id)
                                .then(region => res.json(region))
                                .catch(err => console.log(err)))
                              .catch(err => next(RegionError.badRequest('field is required')))
}

const deleteRegionById = async (req, res, next) => {
    const data = req.body;

    const result = await RegValidation.idVal.validateAsync(data)
                            .then(() => Region.delete(data.id).then((reg) => Region.getRegions()
                              .then(reg => {
                                const names = reg.map(item => item.dataValues.name);                    
                                return res.render('regions', {region: names})})
                                  .catch(err => console.log(err)))
                              .catch(err => console.log(err)))
                            .catch((err) => {console.log('******************: ', err); return next(RegionError.badRequest(err.message))})

}

module.exports = {
    getAllRegions,
    addRegion,
    getRegionById,
    deleteRegionById
}