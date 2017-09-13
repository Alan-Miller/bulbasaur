import React, { Component } from 'react';
import axios from 'axios';
import './Wordnik.css';
// import { apiKey } from '../../config';

class Wordnik extends Component {
    constructor(props) {
        super(props)

        this.state = {
            word: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.define = this.define.bind(this);
    }

    handleInput(event) {
        this.setState({
            word: event.target.value,
            definitions: []
        })
    }

    define(event) {
        const apiKey = 'thisisnotarealapikey';
        event.preventDefault();

        axios.get(`http://api.wordnik.com:80/v4/word.json/${this.state.word}/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=${apiKey}`)
        .then((response) => (
            // console.log(response.data)
            this.setState({definitions: response.data})
        ))
    }

    render() {
        const definitions = !this.state.word ? null : (
            <div>
                <h2>{this.state.word}</h2>
                <ul className="entries">
                    {this.state.definitions.map((entry, indx) => (
                        <li key={indx}>
                            <p>{entry.partOfSpeech}</p>
                            <p>{entry.text}</p>
                            <p>{entry.attributionText}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )

        return (
            <div className="wordnik">
                <form className="word-form" onSubmit={ (e) => this.define(e) }>
                    <input className="word-input" onChange={ (e) => this.handleInput(e) } value={this.state.word} />
                </form>
                { definitions }
            </div>
        )
    }
}

export default Wordnik