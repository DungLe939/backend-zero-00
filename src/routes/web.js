const express = require('express');
const { getUpdate, getHomePage, getCreateUser, getRenderUser, getRenderUpdate, getDelete, getSuccessDelete} = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage);

router.get('/create-user', getRenderUser);
router.post('/create-user', getCreateUser);

router.get('/edit-user/:id', getUpdate);
router.post('/update-user', getRenderUpdate);

router.get('/delete-user/:id', getDelete);
router.post('/delete-user', getSuccessDelete);

module.exports = router;