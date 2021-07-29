var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')

const val = Joi.object({
    name: Joi.string().required()
  })

module.exports = {val}