const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const tablesRoutes = require('./api/routes/tables');
const productsRoutes = require('./api/routes/products');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

mongoose.connect("mongodb+srv://" + process.env.MONGO_ADMIN + 
    ":" + process.env.MONGO_PASS + "@" + 
    process.env.MONGO_DB_NAME + ".kuldc.mongodb.net/" +
    process.env.MONGO_DB_NAME + "?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(m => {
        console.log("Connected to Atlas.");
    })
    .catch(error => {
        console.log(error.message);
    });

app.use('/api/tables', tablesRoutes);
app.use('/api/products', productsRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 400;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;