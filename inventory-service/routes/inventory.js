var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET products invetory listing. */
router.get('/', function(req, res, next) {
  res.send(db.inventory.list());
});

/* add new product inventory to store. */
router.post('/', function(req, res, next) {
    const newProduct = req.body;
    const id = db.inventory.create(newProduct);

    res.send(db.inventory.get(id));
});

/* update a product inventory in store. */
router.put('/:productId', function(req, res, next) {
    const updatedInventory = req.body;
    updatedInventory.productId = req.params.productId;
    db.inventory.update(updatedInventory);

    res.send(db.inventory.get(req.params.productId));
});

/* delete a product in store. */
router.delete('/:productId', function(req, res, next) {
    const productId = req.params.productId;
    db.products.delete(productId);

    res.send(db.inventory.list());
});

module.exports = router;
