# overview
this repo contains 2 samples;
## 1. test-app
a simple node-express apollo server implementation demonstrating various GraphQL basic concepts like schema, type, query, mutation and how to implement resolver functions for list of objects, custom and nested fields and using arguments etc.
### how to run?
`cd test-app`

`npm install`

`npm start`
### test?
click on browser http://localhost:9000/graphiql

Test these queries & mutations on graphql browser using [tests.txt](test-app/tests.txt)
## 2. graphql-api
This project aims to build a simplified e-commerce platform using GraphQL as the API layer and multiple microservices for handling different business domains. We'll focus on three core microservices: Product, Inventory, and Order.

The GraphQL API will act as a unified interface for clients (web, mobile, etc.). It will fetch data from the microservices and resolve queries and mutations.
### Microservices
1. Product Microservice

Manages product information (name, description, price, images, etc.)

Handles product search and filtering

Provides product recommendations

2. Inventory Microservice

Manages product stock levels

Handles order fulfillment checks

3. Order Microservice

Manages customer orders (items, quantities, shipping address, payment details)

Handles order status updates


 
