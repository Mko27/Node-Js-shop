var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')
const RegionError = require('./RegionError');

function ErrorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof RegionError) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('something went wrong');
}

module.exports = ErrorHandler;