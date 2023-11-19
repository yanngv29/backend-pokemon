'use strict';
const pokedex = require('../models/pokemons');
const debug = require('debug')('backend:services:pokemon');

/**
 * fait une recherche dans la base de données par nom français, type et hp dans cette ordre.
 * 
 * @param {*} name 
 * @param {*} type 
 * @param {*} hp 
 * @param {*} done 
 * @returns 
 */
exports.searchPokemon = (name, type, hp, done) => {

      if (name != undefined) {
        pokedex.find({"name.french": name}).then(data => { 
            debug('filtrage par nom');
            return done(undefined,data);
          }).catch( err => { 
            if (err) return done(err);
          });
      } else {
        if (type != undefined) {
            pokedex.find({"type": type}).then( data => { 
                debug('filtrage par type');
                return done(undefined,data);
              }).catch( err => { 
                if (err) return done(err);
              });
          } else {
            if (hp!= undefined) {
                pokedex.find({"base.HP": hp}).then(data => { 
                    debug('filtrage par HP');
                    return done(undefined,data);
                  }).catch( err => { 
                    if (err) return done(err);
                  });
            } else {
              return done(new Error('no name or type or HP'));
            }
          }
      }
      
}

