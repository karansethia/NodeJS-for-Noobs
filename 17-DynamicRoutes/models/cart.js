const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static addProduct(id){
        //fetch previous products
        // Analyze the cart and find existing products
        //add new product or increase the quantity 
    }
}