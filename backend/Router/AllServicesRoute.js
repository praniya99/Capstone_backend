const express = require('express');
const router = express.Router();


const { fetchAllServices } = require('../Controller/AllServicesController');

// Add this route to fetch all services
router.get('/all', fetchAllServices);


module.exports = router;
