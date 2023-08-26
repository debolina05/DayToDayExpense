const express = require('express');
const router = express.Router();

const {getSignupController,postSignupController,postLoginController} = require('./../controllers/signup');


router.get('/signup', getSignupController)
router.post('/signup', postSignupController)
router.post('/login', postLoginController)


module.exports = router;