import axios from 'axios';

export function getPokemon() {
    return axios.get('http://pokeapi.co/api/v2/pokemon/5/').then((charmander) => charmander)
}

