'use strict';

const Model = require('../model.js');

const schema = require ('./products-schema.js');

class ProductsModel extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new ProductsModel();
