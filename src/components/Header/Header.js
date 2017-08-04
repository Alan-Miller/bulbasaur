import React from 'react';
import pokeball from './pokeball.png';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {

    return (
        <div className="App-header">
            <img src={pokeball} className="pokeball" alt="pokeball" />
            <h2>Welcome to the Pokédex</h2>
            <ul className="nav">
                <Link to="/"><li>Arena</li></Link>
                <Link to="/wordnik"><li>Wordnik</li></Link>
            </ul>
        </div>
    )
}