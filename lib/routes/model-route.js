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
router.get('/:model', async (req, res, next) => {
  let result = await req.collectionModel.readByQuery({});
  res.status(200);
  res.send(result);
});

// read single;

router.get('/:model/:id', async (req, res, next) => {
  let result = await req.collectionModel.read(req.params.id);
  res.status(200);
  res.send(result);
});

// update single
router.put('/:model/:id', async (req, res,next) =>{
  let result = await req.collectionModel.update(req.params.id, req.body);
  res.send(result);
});
// Delete single
router.delete('/:model/:id', (req, res, next) =>{

});


module.exports = router;
