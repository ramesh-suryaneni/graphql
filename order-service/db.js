const { DataStore } = require('notarealdb');

const store = new DataStore('./data');
const orders = store.collection('orders');

module.exports = {
   orders
};