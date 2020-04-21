'use strict';

const express = require('express');
const router = express.Router();

const modelFinder = require('../middleware/model-finder.js');




router.param('model',modelFinder);

/**
 * This route allows you to create a model for products and categories
 * @route POST /model
 * @group model
 * @returns {object} 201 - The created object
 * @returns {Error} - If there was an issue creating in the db
 */
router.post('/:model', async (req, res, next) =>{
  let results = await req.collectionModel.create(req.body);
  res.status(201);
  res.send(results);
});

// read all


/**
 * This route allows you to create a model for products and categories
 * @route GET /model
 * @group model
 * @returns {object} 200 - get model
 */
router.get('/:model', async (req, res, next) => {

  let results = await req.collectionModel.readByQuery({});
  console.log(results);
  res.status(200);
  res.send(results);
});

// read single;
/**
 * This route allows you to create a model for products and categories
 * @route GET /model/{id}
 * @group model
 * @returns {object} 200 - get model
 */
router.get('/:model/:id', async (req, res, next) => {
  let results = await req.collectionModel.read(req.params.id);
  res.status(200);
  res.send(results);
});


/**
  * This route allows you to create a model for products and categories
 * @route PUT /model/{id}
 * @group model
 * @param {Number} id.path - the id of the field you want to update
 * @returns {object} 200 - The updated object
 * @returns {Error} - If there was an issue updating in the db
 */
// update single
router.put('/:model/:id', async (req, res,next) =>{
  let results = await req.collectionModel.update(req.params.id, req.body);
  res.send(results);

});


// Delete single
/**
  * This route allows you to create a model for products and categories
 * @route DELETE /model/{id}
 * @group model
 * @param {Number} id.path - the id of the field you want to update
 * @returns {object} 200 - delete model by id
 */
router.delete('/:model/:id', async (req, res, next) =>{
  let results = await req.collectionModel.delete(req.params.id);
  res.send(results);
});



module.exports = router;
