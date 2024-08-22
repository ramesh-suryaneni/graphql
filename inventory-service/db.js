const { DataStore } = require('notarealdb');

const store = new DataStore('./data');
const inventory = store.collection('inventory');

module.exports = {
   inventory
};