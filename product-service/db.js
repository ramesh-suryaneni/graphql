const { DataStore } = require('notarealdb');

const store = new DataStore('./data');
const products = store.collection('products');

module.exports = {
   products
};