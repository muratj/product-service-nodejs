const { Exception } = require('../middlewares/exceptionHandler');
const { badRequest } = require('../middlewares/exceptionMessages');
const logger = require('../middlewares/logger');
const Product = require('../models/Product');

const saveProduct = async (payload) => {
  try {
    return await Product.create({
      sku: payload.sku,
      brand: payload.brand,
      model: payload.model,
      category: payload.category
    });
  } catch (err) {
    logger.error(`${badRequest}\n ${err.message}`);
    return Exception(badRequest, err.message);
  }
}

const findAllProducts = async () => {
  try {
    return await Product.find();
  } catch (err) {
    logger.error(`${badRequest}\n ${err.message}`);
    return Exception(badRequest, err.message);
  }
}

const findProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (err) {
    logger.error(`${badRequest}\n ${err.message}`);
    return Exception(badRequest, err.message);
  }
}


const findProductWhere = async (payload) => {
  try {
    const results = await Product.find(payload);
    return results;
  } catch (err) {
    logger.error(`${badRequest}\n ${err.message}`);
    return Exception(badRequest, err.message);
  }
}

const updateProductById = async (id, payload) => {
  try {
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
  } catch (err) {
    logger.error(`${badRequest}\n ${err.message}`);
    return Exception(badRequest, err.message);
  }
}

const deleteProductById = async (id) => {
  try {
    return await Product.deleteOne({ _id: id });
  } catch (err) {
    logger.error(`${badRequest}\n ${err.message}`);
    return Exception(badRequest, err.message);
  }
}

module.exports = {
  saveProduct,
  findAllProducts,
  findProductById,
  updateProductById,
  deleteProductById,
  findProductWhere
}