const express = require('express');
const router = express.Router();
const AnswerVoteController = require('../controllers/AnswerVoteController');


router.get('/votes/:answerId', AnswerVoteController.getVotesByAnswer);
router.get('/vote-status/:userId/:answerId', AnswerVoteController.checkVoteStatus);
router.get('/vote-stats/:answerId', AnswerVoteController.getVoteStats);

module.exports = router;
