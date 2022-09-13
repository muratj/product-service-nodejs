const Product = require('../models/Product');

const createProduct = async (req, res) => {
  const product = await Product.create({
    sku: req.body.sku,
    brand: req.body.brand,
    model: req.body.model,
    category: req.body.category,
  });

  res.json(product);
}

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
}

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
}

const updateProduct = async (req, res) => {
  await Product.updateOne(
    { _id: req.params.id },
    {
      $set: {
        sku: req.body.sku,
        brand: req.body.brand,
        model: req.body.model,
        category: req.body.category
      }
    },
    { new: true }
  );

  res.json(await Product.findById(req.params.id));
}

const deleteProduct = async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.json(result);
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}