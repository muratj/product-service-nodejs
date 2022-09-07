const express = require('express');

// Environment setup
require('./config/env.config')();
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`App running on port ${PORT}`));