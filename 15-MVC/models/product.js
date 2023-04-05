//? this is information about what a single product should look like and what kind of data should it represent

products = [];

module.exports = class Product  {
    constructor(title){
        this.title = title;
    }

    save(){
        products.push(this);    //* Adds the title from the newly created object into the array
    }

    static fetchAll(){      //* Static method to call whwnever we want to fetch all products directly from the class without instantiating an object
        return products;
    }
}