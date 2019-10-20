const path = require('path');
const Category = require(path.resolve('/sneakerbox', 'models', 'Category', 'Category'));
const Customer = require(path.resolve('/sneakerbox', 'models', 'Customer', 'Customer'));
const Order = require(path.resolve('/sneakerbox', 'models', 'Order', 'Order'));
const Product = require(path.resolve('/sneakerbox', 'models', 'Product', 'Product'));
const Review = require(path.resolve('/sneakerbox', 'models', 'Review', 'Review'));

module.exports = {
    Category    :   Category,
    Customer    :   Customer,
    Order       :   Order,
    Product     :   Product,
    Review      :   Review,
};
