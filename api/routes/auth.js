var express = require('express');
var router = express.Router();
var authControler = require('../controlers/auth')


/* GET my user info. */
router.get('/login', authControler.login);
router.get('/refreshToken', authControler.refreshToken);

module.exports = router;
