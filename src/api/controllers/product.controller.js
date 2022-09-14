const Product = require('../models/Product');
const { saveProduct, findAllProducts, findProductById, updateProductById, deleteProductById } = require('../services/product.service');

const createProduct = async (req, res) => {
  const product = await saveProduct(req.body);
  if (product.error) res.status(400);
  res.json(product);
}

const getAllProducts = async (req, res) => {
  const products = await findAllProducts();
  if (product.error) res.status(400);
  res.json(products);
}

const getProductById = async (req, res) => {
  const product = await findProductById(req.params.id);
  if (product.error) res.status(400);
  res.json(product);
}

const updateProduct = async (req, res) => {
  const updatedProduct = await updateProductById(req.params.id, req.body);
  if (updatedProduct.error) res.status(400);
  res.json(updatedProduct);
}

const deleteProduct = async (req, res) => {
  const result = await deleteProductById(req.params.id);
  if (result.error) res.status(400);
  res.json(result);
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}