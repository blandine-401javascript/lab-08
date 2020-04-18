'use strict';

const productsSchema = require('../models/products-schema.js');
const categoriesSchema = require('../models/products-schema.js');
const Model = require('../models/model.js');

const modelFinder = (req, res, next) => {


  switch(req.params.model){
  case 'products':
    console.log('found model products');
    req.collectionModel = new Model(productsSchema);
    next();
    break;
  case 'categories':
    console.log('found model categories');
    req.collectionModel = new Model(categoriesSchema);
    next();
    break;

  default:
    console.log('invalid');
    res.status(404);
    res.end();
    next();
    break;
  }



};



module.exports = modelFinder;
