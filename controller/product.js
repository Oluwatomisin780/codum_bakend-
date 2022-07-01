const express = require('express');
const Furniture = require('../models/product');
exports.getFurnitures = (req, res, next) => {
  Furniture.find()
    .then((furnitures) => {
      res.status(200).json({
        message: 'product fetched',
        furniture: furnitures,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.createFurniture = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;
  const product = new Furniture({
    name: name,
    price: price,
    description: description,
    image: image,
  });
  product.save().then((product) => {
    res
      .status(200)
      .json({
        message: 'product created',
        products: product,
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.getFurniture = (req, res, next) => {
  //get single furniture
  const furnitureId = req.params.furnitureId;
  Furniture.findById(furnitureId)
    .then((result) => {
      res.status(200).json({
        message: 'sent furniture single product',
        result: result,
      });
    })
    .catch((error) => {
      connsole.log(error);
    });
};
