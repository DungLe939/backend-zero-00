const express = require('express');
const {getMessage, getHomePage} = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);

router.get('/abc', getMessage);

module.exports = router;