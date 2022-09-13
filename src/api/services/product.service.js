const Product = require('../models/Product');

const saveProduct = async (payload) => {
  return await Product.create({
    sku: payload.sku,
    brand: payload.brand,
    model: payload.model,
    category: payload.category
  });
}

const findAllProducts = async () => {
  return await Product.find();
}

const findProductById = async (id) => {
  return await Product.findById(id);
}

const updateProductById = async (id, payload) => {
  await Product.updateOne(
    { _id: id },
    {
      $set: {
        sku: payload.sku,
        brand: payload.brand,
        model: payload.model,
        category: payload.category
      }
    },
    { new: true }
  );

  return await findProductById(id);
}

const deleteProductById = async (id) => {
  return await Product.deleteOne({ _id: id });
}

module.exports = {
  saveProduct,
  findAllProducts,
  findProductById,
  updateProductById,
  deleteProductById
}