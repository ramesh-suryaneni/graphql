var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send(db.orders.list());
});

/* add new order. */
router.post('/', function(req, res, next) {
    const newOrder = req.body;
    const id = db.orders.create(newOrder);

    res.send(db.orders.get(id));
});

/* update a order inventory in store. */
router.put('/:orderId', function(req, res, next) {
    const updatedOrder = req.body;
    updatedOrder.orderId = req.params.orderId;
    db.orders.update(updatedOrder);

    res.send(db.inventory.get(req.params.productId));
});

/* delete a product in store. */
router.delete('/:productId', function(req, res, next) {
    const productId = req.params.productId;
    db.products.delete(productId);

    res.send(db.inventory.list());
});

module.exports = router;
