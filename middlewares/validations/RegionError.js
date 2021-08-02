var express = require('express');
var router = express.Router();
const db = require('../../config/index');
const  models = require('../../models');
const {Region} = models
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Joi = require('joi')

  
class RegionError {
    constructor(code, message) {
      this.code = code;
      this.message = message;
    }
  
    static invalidInput(msg) {
      return new RegionError(400, msg);
    }

    static notFound() {
      return new RegionError(404, 'Page not found')
    }
  
    static internal(msg) {
      return new RegionError(500, msg);
      }
  }
  
  module.exports = RegionError;