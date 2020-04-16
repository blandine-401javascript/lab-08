'use strict';

const express = require('express');
const router = express.Router();
const categoriesSchema =require('../models/categories-schema.js');
let Model = require('../models/model.js');

let categoriesModel = new Model(categoriesSchema);


router.get('/api/v1/categories', async (req, res, next) =>{
  let results = await categoriesModel.readByQuery({});
  res.send(results);
});

/**
 * This route allows you to get a categories
 * @route GET /categories
 * @group categories
 * @returns {object} 200 - get categories
 */
router.get('/api/v1/categories/:id', async (req, res, next) => {
  let record = await categoriesModel.read(req.params.id);

  res.send(record);

});

/**
 * This route allows you to create a categories
 * @route POST /categories
 * @group categories
 * @returns {object} 201 - The created object
 * @returns {Error} - If there was an issue creating in the db
 */
router.post('/api/v1/categories', async (req, res, next) => {

  // get the objrct from req.body
  console.log('in progress');
  let newCat = await categoriesModel.create(req.body);


  res.status(201);
  res.send(newCat);
});


/**
 * This route allows you to update a categories
 * @route PUT /categories/{id}
 * @group categories
 * @param {Number} id.path - the id of the field you want to update
 * @returns {object} 200 - The updated object
 * @returns {Error} - If there was an issue updating in the db
 */
router.put('/api/v1/categories/:id', async (req, res, next) => {
  let record = await categoriesModel.update(req.body);

  res.send(record);

});

/**
 * This route allows you to delete a categories
 * @route DELETE /categories/{id}
 * @group categories
 * @param {Number} id.path - the id of the field you want to update
 * @returns {object} 200 - delete categories by id
 */
router.delete('/api/v1/categories/:id', async (req, res, next) => {
  let record = await categoriesModel.delete(req.params.id);

  res.send(record);

});


module.exports = router;

