var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var pokemonsRouter = require('./pokemons');
var authRouter = require('./auth');

router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRouter);
router.use('/users', usersRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
