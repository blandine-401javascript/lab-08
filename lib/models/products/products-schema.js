'use strict';

const mongoose =require('mongoose');

const schema = mongoose.Schema({
  id: { required: true, type: Number },
  category: { required: true, type: String },
  name: { required: true, type: String },
  display_name: { type: String },
  description: { type: String },
});


const model = mongoose.model('products', schema);
module.exports = model;
