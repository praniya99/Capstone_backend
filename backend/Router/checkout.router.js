const express = require('express');
const router = express.Router();
const {createCheckout} = require('../Controller/checkout.controller.js');

router.post('/createCheckout', createCheckout);

module.exports = router;

