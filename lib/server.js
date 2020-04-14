'use strict';

const express = require('express');
const app = express();
const generateSwagger = require('../docs/swagger.js');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products-routes.js');
const categoriesRouter = require('./routes/categories-routes.js');



app.use(express.json());

const startServer = (port, mongodb) => {
  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(mongodb, options);



  app.listen(port, () =>{
    console.log('Never Give Up');
  });
};

generateSwagger(app);
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/products', productsRouter );

app.use('/api/v1/categories', categoriesRouter);





/**
 * This route gives you a standard "Homepage" message
 * @route GET /
 * @returns  200 - The HTML to show on the homepage
 */

app.get('/', (req, res, next) => {

  res.send('Homepage');
});
















module.exports = {
  server: app,
  start : startServer,
};

