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


router.post('/products', async (req, res, next) => {

  // get the objrct from req.body
  let record = await productsModel.find(req.body);


  res.status(201);
  res.send(record);
});

/**
 * This route allows you to update a products
 * @route PUT /products/{id}
 * @group products
 * @param {Number} id.path - the id of the field you want to update
 * @returns {object} 200 - The updated object
 * @returns {Error} - If there was an issue updating in the db
 */
router.put('/api/v1/products/:id', async (req, res, next) => {
  let record = await productsModel.update(req.body);

  res.send(record);

});

router.delete('/api/v1/products/:id', async (req, res, next) => {
  let record = await productsModel.delete(req.params.id);

  res.send(record);

});

module.exports = router;
