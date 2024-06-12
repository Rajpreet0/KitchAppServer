const express = require('express');
const {getOpenAiResponse} = require('../controllers/openaiController');
const { getUserByEmailAndPassword, registerUser } = require('../controllers/userController');

// Create a new Express router instance
const router = express.Router();

// Define a route for the root URL ('/') that uses the getOpenAiResponse function as its handler
router.post('/', getOpenAiResponse);


// Define routes for user data
router.post('/users/login', getUserByEmailAndPassword);
router.post('/users/register', registerUser);

module.exports = router;