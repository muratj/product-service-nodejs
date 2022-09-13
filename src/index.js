const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./configs/db.config');
const Product = require('./api/models/Product');

// Environment setup
require('./configs/env.config')();
const PORT = process.env.PORT || 3000;
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const productRouter = require('./api/routes/product.route');

app.use('/product', productRouter);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
