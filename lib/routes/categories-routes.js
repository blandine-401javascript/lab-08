'use strict';

const express = require('express');
const router = express.Router();
const categoriesSchema =require('../models/categories-schema.js');
let Model = require('../models/model.js');

let categoriesModel = new Model(categoriesSchema);


router.get('/', async (req, res, next) =>{
  let results = await categoriesModel.readByQuery({});
  res.send(results);
});



router.get('/:id', async (req, res, next) => {
  let record = await categoriesModel.read(req.params.id);

  res.send(record);

});



router.put('/api/v1/categories/:id', async (req, res, next) => {
  let record = await categoriesModel.update(req.body);

  res.send(record);

});

router.delete('/api/v1/categories/:id', async (req, res, next) => {
  let record = await categoriesModel.delete(req.params.id);

  res.send(record);

});


module.exports = router;

