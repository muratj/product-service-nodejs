const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Connected to DB at ${connection.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDB;