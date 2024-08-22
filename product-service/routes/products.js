var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send(db.products.list());
});

/* add new product to store. */
router.post('/', function(req, res, next) {
    const newProduct = req.body;
    const id = db.products.create(newProduct);

    res.send(db.products.get(id));
});

/* update a product in store. */
router.put('/:productId', function(req, res, next) {
    const updatedProduct = req.body;
    updatedProduct.id = req.params.productId;
    db.products.update(updatedProduct);

    res.send(db.products.get(req.params.productId));
});

/* delete a product in store. */
router.delete('/:productId', function(req, res, next) {
    const productId = req.params.productId;
    db.products.delete(productId);

    res.send(db.products.list());
});

module.exports = router;
