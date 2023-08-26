const express = require('express');
const router = express.Router();

const {getSignupController,postSignupController} = require('./../controllers/signup');


router.get('/signup', getSignupController)
router.post('/signup', postSignupController)

module.exports = router;