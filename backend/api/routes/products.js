const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(menu => {
        console.log(menu);
        res.status(201).json({
            message: "GET request at /api/menu",
            menu: menu
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: err.message,
            menu: null
        });
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
    .then(() => {
        res.status(200).json({
            message: "Handling POST requests to /api/menu and saving to products",
            product: product
        });
    })
    .catch(err => {
        res.status(500).json({
            message: err.message,
            product: null
        });
    })
});

module.exports = router;