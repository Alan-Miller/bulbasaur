import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PokeForm from './PokeForm/PokeForm';
import Header from './Header/Header';

class App extends Component {

  constructor() {
    super()
    this.state = {}
    this.evolve = this.evolve.bind(this);
  }

  evolve(stage) {
    const imgClasses = document.getElementsByClassName('pokeImg')[0].classList;
    const imgDivClasses = document.getElementsByClassName('pokeImgDiv')[0].classList;
    imgClasses.add('hidden');
    imgDivClasses.add('glow');

    axios
    .get(`http://pokeapi.co/api/v2/pokemon/${stage}`)
    .then((response) => {
      imgClasses.remove('hidden');
      imgDivClasses.remove('glow');
      this.setState({pokemon: {name: response.data.name, sprites: response.data.sprites}})
    })
  }

  componentWillMount() {
    axios
    .get('http://pokeapi.co/api/v2/pokemon/1')
    .then((response) => {
      var pokeName = response.data.name
      this.setState({pokemon: {name: pokeName, sprites: response.data.sprites}})
    })
  }

  render() {

    const poke = !this.state.pokemon ? <h2 style={ {color: "white"} }>Gotta catch 'em all...</h2> : (
      <PokeForm evolve={this.evolve} name={this.state.pokemon.name} sprite={this.state.pokemon.sprites.front_default} />
    )
    return (
      <div className="App">
        <Header />       
        {poke}
      </div>
      
    );
  }
}

export default App;