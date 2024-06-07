const express = require('express');
const router = express.Router();
const {createComment}=require('../Controller/comment.controller.js');

router.post('/createComment', createComment);

module.exports = router;