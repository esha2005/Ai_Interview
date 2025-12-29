const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

router.get('/', interviewController.getInterviews);

module.exports = router;
