var express = require('express');
var router = express.Router();
var userControler = require('../controlers/users')

/* GET users listing. */
router.get('/', userControler.getAll);

module.exports = router;
