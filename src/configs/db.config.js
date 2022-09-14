const mongoose = require('mongoose');
const logger = require('../api/middlewares/logger');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    logger.info(`Connected to DB at ${connection.connection.host}`);
  } catch (err) {
    logger.info(err.message);
  }
}

module.exports = connectDB;