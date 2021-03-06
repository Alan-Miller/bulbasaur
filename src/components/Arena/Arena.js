import React, { Component } from 'react';
import './Arena.css';
import PokeForm from '../PokeForm/PokeForm';
import { getFirstPokemon, getPokemon } from '../../services/pokeService';

class Arena extends Component {

  constructor() {
    super()
    this.state = {};
    this.evolve = this.evolve.bind(this);
  }

  evolve(stage) {
    // Evolution animation
    const imgClasses = document.getElementsByClassName('pokeImg')[0].classList;
    const imgDivClasses = document.getElementsByClassName('pokeImgDiv')[0].classList;
    imgClasses.add('hidden');
    imgDivClasses.add('glow');
    
    // GET request
    getPokemon(stage)
    .then((pokeData) => {
      imgClasses.remove('hidden');
      imgDivClasses.remove('glow');
      this.setState({pokemon: {name: pokeData.name, sprites: pokeData.sprites}})
    })
  }

  componentWillMount() {
    // console.log('mounted');
    console.log('componentWillMount is first');
    getFirstPokemon()
    .then((bulbaData) => {
      var pokeName = bulbaData.name
      this.setState({pokemon: {name: pokeName, sprites: bulbaData.sprites}})
    })
    .catch(error => console.log(error.message))
  }

  componentDidMount() {
    console.log('componentDidMount is second');
  }

  componentWillUnmount() {
    console.log('componentWillUnMount is last');
  }

  shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate is now');
    return true;
  }

  render() {

    const poke = !this.state.pokemon ? <h2 style={ {color: "white"} }>Gotta catch 'em all...</h2> : (
      <PokeForm test="testProp" evolve={this.evolve} name={this.state.pokemon.name} sprite={this.state.pokemon.sprites.back_default} />
    )
    return (
      <div className="Arena">
        {poke}
      </div>
      
    );
  }
}

export default Arena;