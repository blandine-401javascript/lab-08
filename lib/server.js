'use strict';

const express = require('express');
const app = express();
const generateSwagger = require('../docs/swagger.js');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const modelRouter = require('./routes/model-route.js');
const notFound = require('../lib/middleware/404.js');
const serverError = require ('../lib/middleware/500.js');




const startServer = (port, mongodb) => {
  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(mongodb, options);



  app.listen(port, () =>{
    console.log('Never Give Up', port);
  });
};

generateSwagger(app);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));






/**
 * This route gives you a standard "Homepage" message
 * @route GET /
 * @returns  200 - The HTML to show on the homepage
 */

app.get('/', (req, res, next) => {
  
  res.send('Homepage');
});

app.use('/api/v1', modelRouter);









app.use('*', notFound);
app.use(serverError);





module.exports = {
  server: app,
  start : startServer,
};

