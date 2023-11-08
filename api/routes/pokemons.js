var express = require('express');
var router = express.Router();
var pokemonsControler = require('../controlers/pokemons')

/* GET users listing. */
router.get('/', pokemonsControler.getAll);
router.get('/search', pokemonsControler.search);
router.get('/:id', pokemonsControler.getOne);


module.exports = router;
