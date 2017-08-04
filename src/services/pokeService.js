import axios from 'axios';

export function getFirstPokemon() {
    return axios.get(`http://pokeapi.co/api/v2/pokemon/1`).then(pokemon => pokemon.data);
}

export function getPokemon(stage) {
    return axios.get(`http://pokeapi.co/api/v2/pokemon/${stage}`).then(pokemon => pokemon.data);
}