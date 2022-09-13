const Product = require('../models/Product');
const { saveProduct, findAllProducts, findProductById, updateProductById, deleteProductById } = require('../services/product.service');

const createProduct = async (req, res) => {
  const product = await saveProduct(req.body);
  res.json(product);
}

const getAllProducts = async (req, res) => {
  const products = await findAllProducts();
  res.json(products);
}

const getProductById = async (req, res) => {
  const product = await findProductById(req.params.id);
  res.json(product);
}

const updateProduct = async (req, res) => {
  const updatedProduct = await updateProductById(req.params.id, req.body);
  res.json(updatedProduct);
}

const deleteProduct = async (req, res) => {
  const result = await deleteProductById(req.params.id);
  res.json(result);
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}