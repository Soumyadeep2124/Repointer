const express = require('express');
const aiRouter =  express.Router();
const userMiddleware = require("../middleware/userMiddleware");
const solveDoubt = require('../controllers/solveDoubt');
const solveQuestion = require('../controllers/solveQuestion');

aiRouter.post('/chat', userMiddleware, solveDoubt);
aiRouter.post('/question', userMiddleware, solveQuestion)

module.exports = aiRouter;