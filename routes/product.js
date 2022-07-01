const express = require('express');

const furnitureController = require('../controller/product');

const router = express.Router();

router.get('/furnitures', furnitureController.getFurnitures);

router.post('/furnitures', furnitureController.createFurniture);

router.get('/furniture/:furnitureId', furnitureController.getFurniture);

module.exports = router;
