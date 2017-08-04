import React from 'react';
import './PokeForm.css';

export default function PokeForm(props) {
    var stage = {'bulbasaur': 2, 'ivysaur': 3, 'venusaur': 1}[props.name];

    return (
        <div className="poke">
            <h1>{props.name}</h1>
            <div className="pokeImgDiv">
                <img className="pokeImg" src={props.sprite} width="400" alt="pokemon"/>
            </div>   
            <div className="evolveBtn" onClick={ () => props.evolve(stage) }><span>EVOLVE!</span></div>
        </div>
    )
}