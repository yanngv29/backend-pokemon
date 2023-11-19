'use strict';

const pokedex = require('../../models/pokemons');
const Service = require('../../services/pokemons');
const debug = require('debug')('backend:ctrl:pokemon');


exports.getAll = (req, res, next) => {
  debug('get all');
  pokedex.find({}).then(data => {  // trop simple pour fabriquer un service pour ça
    return res.status(200).json(data);
  }).catch( err => { 
    if (err) return next(err);
  });
    
};

exports.getOne = (req, res, next) => {
    var id = req.params.id
    // on verifie que l'id est un entier
    var idNumber;
    try {
      idNumber = parseInt(id);
    } catch (error) {
      debug('id is not a number : '+ id);
      return next(error);
    }

    if (isNaN(idNumber)) {
      debug('id is not a number : '+ id);
      return next(new Error('id is not a number'));
    }

    // ensuite c'est mongoose qui fait le "casting" des données suivant le model Pokemon
    pokedex.findOne({"id": id}).then( data => { // trop simple pour fabriquer un service pour ça
      if (data == null) { return res.status(404).json({message: 'no pokemon with that id'}); }
      return res.status(200).json(data);
    }).catch( err => { 
      if (err) return next(err);
    });
  };

exports.search = (req, res, next) => {
    var name = req.query.name;
    var type = req.query.type;
    var hp = req.query.hp;

    //aucune vérification ou preque ;-) tant pis.
    if (name == null && type == null && hp == null) {
      return res.status(400).json({message: 'you must specify at least one parameter'});
    } 
    debug('search by name, type, hp ');
    Service.searchPokemon(name, type, hp, (err, data) => { 
      if (err) return next(err);
      return res.status(200).json(data);
    });

  };