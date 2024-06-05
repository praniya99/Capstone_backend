const express = require('express');
const router = express.Router();
const { createDeliver} = require('../Controller/delivery.controller.js');

router.post('/createDeliver', createDeliver);

module.exports = router;
