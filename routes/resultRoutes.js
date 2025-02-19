const express = require('express');
const { submitResult, getResults } = require('../controllers/resultController');
const router = express.Router();

router.post('/', submitResult);
router.get('/results', getResults);

module.exports = router;