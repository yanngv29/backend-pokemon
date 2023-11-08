'use strict';

const pokedex = require('../../models/pokemons');
exports.getAll = (req, res, next) => {
    return res.status(200).json(pokedex);
  };

exports.getOne = (req, res, next) => {
    var id = req.params.id
    const filteredPokedex = pokedex.filter(p => p.id == id)
    return res.status(200).json(filteredPokedex);
  };

exports.search = (req, res, next) => {
    var name = req.query.name;
    var type = req.query.type;
    var hp = req.query.hp;
    if (name != undefined) {
        const filteredPokedex = pokedex.filter(p => p.name.french == name)
        console.log('filtrage par nom');
        return res.status(200).json(filteredPokedex);
    }
    if (type != undefined) {
        console.log('filtrage par type : '+ type);
        const filteredPokedex = pokedex.filter(p =>  p.type.includes(type))  
        return res.status(200).json(filteredPokedex);
    }
    if (hp != undefined) {
        console.log('filtrage par hp : '+ hp);
        const filteredPokedex = pokedex.filter(p =>  p.base.HP == hp)  
        return res.status(200).json(filteredPokedex);
    }
  };