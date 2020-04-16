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

/**
 * This route allows you to get a products
 * @route GET /products
 * @group products
 * @returns {object} 200 - get products
 */
router.get('/:id', async (req, res, next) => {
  let record = await productsModel.read(req.params.id);

  res.send(record);

});

/**
 * This route allows you to create a products
 * @route POST /products
 * @group products
 * @returns {object} 201 - The created object
 * @returns {Error} - If there was an issue creating in the db
 */
router.post('/api/v1/products', async (req, res, next) => {

  // get the objrct from req.body

  console.log('in progress');
  let newPro = await productsModel.create(req.body);


  res.status(201);
  res.send(newPro);
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


/**
 * This route allows you to delete a products
 * @route DELETE /products/{id}
 * @group products
 * @param {Number} id.path - the id of the field you want to update
 * @returns {object} 200 - delete products by id
 */
router.delete('/api/v1/products/:id', async (req, res, next) => {
  let record = await productsModel.delete(req.params.id);

  res.send(record);

});

module.exports = router;
