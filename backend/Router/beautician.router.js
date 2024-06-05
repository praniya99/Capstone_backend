const express = require('express');
const router = express.Router();
const {createBeautician} = require('../Controller/beauticians.controller.js');

router.post('/createBeautician', createBeautician);

module.exports = router;
