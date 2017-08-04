import React from 'react';
import pokeball from './pokeball.png';
import './Header.css';

export default function Header(props) {

    return (
        <div className="App-header">
          <img src={pokeball} className="pokeball" alt="pokeball" />
          <h2>Welcome to the Pokédex</h2>
        </div>
    )
}