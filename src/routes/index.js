const express = require('express');
const {getOpenAiResponse} = require('../controllers/openaiController');

// Create a new Express router instance
const router = express.Router();

// Define a route for the root URL ('/') that uses the getOpenAiResponse function as its handler
router.post('/', getOpenAiResponse);

module.exports = router;