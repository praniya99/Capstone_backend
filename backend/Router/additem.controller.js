const express = require('express');
const router = express.Router();
const { createAdditem } = require('../Controller/additem.controller.js');

router.post('/createAdditem);', createAdditem);

module.exports = router;