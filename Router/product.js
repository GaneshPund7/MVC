const express = require('express');
const product = express.Router();
const { getProduct, addProduct, updateProduct, deleteProduct } = require('../Controller/product');
const { updateMany } = require('../Modal/user');

product.route('/').get(getProduct).post(addProduct);
product.route('/:id').put(updateProduct).delete(deleteProduct);

module.exports = product;