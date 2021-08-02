var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')

const nameVal = Joi.object({
    name: Joi.string()
             .required()
             .regex(/^[a-zA-Z]{1,60}$/)
})

const idVal = Joi.object({
    id: Joi.number()
           .required()
})

module.exports = {
    nameVal,
    idVal
} 

