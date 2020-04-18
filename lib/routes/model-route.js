'use strict';

const express = require('express');
const router = express.Router();

const modelFinder = require('../middleware/model-finder.js');



router.param('model',modelFinder);

router.post('/:model', async (req, res, next) =>{
  let results = await req.collectionModel.create(req.body);
  res.status(201);
  res.send(results);
});

// read all


router.get('/test', (req, res, next) =>{
  console.log('good');
});

router.get('/api/v1/:model', async (req, res, next) => {
  console.log('we are here');
  let results = await req.collectionModel.readByQuery({});
  console.log(results);
  res.status(200);
  res.send(results);
});

// read single;

router.get('/:model/:id', async (req, res, next) => {
  let results = await req.collectionModel.read(req.params.id);
  res.status(200);
  res.send(results);
});

// update single
router.put('/:model/:id', async (req, res,next) =>{
  let results = await req.collectionModel.update(req.params.id, req.body);
  res.send(results);
});
// Delete single
router.delete('/:model/:id', (req, res, next) =>{

});


module.exports = router;
