'use strict';

const express = require('express');
const router = express.Router();
const productsSchema = require('../models/products-schema.js');
const Model =require('../models/model.js');




const productsModel = new Model(productsSchema);



router.get('/', async (req,res,next) =>{

  let results =  await productsModel.readByQuery({});

  res.send(results);
});


router.get('/:id', async (req, res, next) => {
  let record = await productsModel.read(req.params.id);

  res.send(record);

});

module.exports = router;
