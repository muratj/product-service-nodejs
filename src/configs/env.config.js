const path = require('path');

module.exports = () => {
  const envFilePath = path.resolve(__dirname, `../../.${process.env.NODE_ENV}.env`);
  require('dotenv').config({ path: envFilePath });
}