const express = require('express');
const { getQuestions, addQuestion, getCount } = require('../controllers/questionController');
const router = express.Router();

router.get('/', getQuestions);
router.post('/add', addQuestion);
router.get('/count', getCount);
module.exports = router;