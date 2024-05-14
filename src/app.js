const express = require('express');
const helmet = require('helmet'); // Security Reasons
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Adds HTTP Headers
app.use(helmet());

// Define routes
app.use('/', routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
