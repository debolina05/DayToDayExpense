const express = require('express');
const router = express.Router();

const {getLoginController,postLoginController} = require('./../controllers/login');

router.get('/login', getLoginController)
router.post('/login', postLoginController)

module.exports = router;