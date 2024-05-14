const express = require('express');
const openaiController = require('../controllers/openaiController');

const router = express.Router();

router.get('/', openaiController.getOpenAiResponse);

module.exports = router;