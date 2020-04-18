'use strict';

const Model = require('../model.js');

const schema = require ('./categories-schema.js');

class CategoriesModel extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new CategoriesModel();
