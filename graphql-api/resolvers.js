const fetch = require('node-fetch');

const Query = {
    //Standard approach, without the @rest directive
    products: () => {
        return fetch('http://localhost:4000/products').then(res => res.json());
    },
    product:(root,args,context,info) => {
        const product = fetch(`http://localhost:4000/products?id=${args.id}`)
        .then(res => res.json())
        .then(data => data.results[0]);
        return product;

    },
    order:(root,args,context,info) => {
        return fetch(`https://api.github.com/users/${args.id}`).then(res => res.json());

    }
    
}
const Mutation = {
    createOrder:(root,args,context,info) => {
    }
    
 }
module.exports = {Query, Mutation}