const express = require('express');
const app = express();
const dotenv = require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const furnitureRoute = require('./routes/product');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTION,GET,POST,PUT,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Authorization'
  );
  next();
});
app.use(furnitureRoute);
const database = process.env.DATABASE;
mongoose
  .connect(database)
  .then((result) => {
    app.listen(8000);
    console.log('connected!');
  })
  .catch((err) => {
    console.log(err);
  });
