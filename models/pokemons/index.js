'use strict';

var mongoose = require('mongoose');
/** exemple de pokemon
  {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
 */
var PokemonSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  name: {
    english: {type: String, required: false},
    japanese: {type: String, required: false},
    chinese: {type: String, required: false},
    french: {type: String, required: false},
  },
  type: [String],
  base: {
    HP: {type: Number, required: true},
    Attack: {type: Number, required: true},
    Defense: {type: Number, required: true},
    'Sp. Attack': {type: Number, required: true},
    'Sp. Defense': {type: Number, required: true},
    Speed: {type: Number, required: true},
  }
});

module.exports = mongoose.model('pokemons', PokemonSchema);
