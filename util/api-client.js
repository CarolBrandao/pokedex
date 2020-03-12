const fetch = require("node-fetch")

export function fetchPokemon(pokemon){
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
}