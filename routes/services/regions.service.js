var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')

const getAllRegions = (req, res) =>{
    return Region.getRegions()
    .then(reg => {
      const names = reg.map(item => item.dataValues.name);

      return res.render('regions', {region: names})
    })
    .catch(err => console.log(err))
}

const  addRegion = async (req, res) => {
    const val = Joi.object({
      name: Joi.string().required()
    })

    const result = await val.validateAsync(req.body)
      .then(() => console.log("Ooooooooooooooooo"))
      .catch(err => res.render('error', {error: err}))

    const data = req.body;
    
    return Region.add(data)
      .then((reg) => Region.getRegions()
        .then(reg => {
          const names = reg.map(item => item.dataValues.name);

          return res.render('regions', {region: names})})
        .catch(err => console.log(err)))
      .catch(err => console.log(err));
}

const getRegionById = (req, res) => {
    const { id } = req.params;

    return Region.findById(id)
        .then(region => res.json(region))
        .catch(err => console.log(err));
}

const deleteRegionById = (req, res) => {
    const data = req.body;
 
    return Region.delete(data.id).then((reg) => Region.getRegions()
        .then(reg => {
          const names = reg.map(item => item.dataValues.name);

          return res.render('regions', {region: names})})
            .catch(err => console.log(err)))
        .catch(err => console.log(err));
}

module.exports = {
    getAllRegions,
    addRegion,
    getRegionById,
    deleteRegionById
}