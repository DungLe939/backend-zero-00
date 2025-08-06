const express = require('express');
const { getUpdate, getHomePage, getCreateUser, getRenderUser, getRenderUpdate } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);

router.get('/create-user', getRenderUser);
router.post('/create-user', getCreateUser);

router.get('/edit-user/:id', getUpdate);
router.post('/update-user', getRenderUpdate);

module.exports = router;