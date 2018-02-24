import React from 'react';
import './PokeForm.css';

export default class PokeForm extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = { test: 'zero' };
    // }

    // componentWillMount() {
    //     this.setState({ test: 'two'});
    // }

    // componentDidMount() {
    //     this.setState({ test: 'three'});
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps, 'nextState', nextState);
        if (nextProps.name === 'venusaur') return false;
        // if (props.)
        else return true;
    }

    componentWillUpdate() {
        console.log(('will update'))
    }

    componentDidUpdate() {
        console.log(('did update'))
    }

    render() {
        // console.log('test', this.state.test);
        const stage = { 'bulbasaur': 2, 'ivysaur': 3, 'venusaur': 1 }[this.props.name];
        return (
            <div className="poke">
                <h1>{this.props.name}</h1>
                <div className="pokeImgDiv">
                    <img className="pokeImg" src={this.props.sprite} width="400" alt="pokemon" />
                </div>
                <div className="evolveBtn" onClick={() => this.props.evolve(stage)}><span>EVOLVE!</span></div>
            </div>
        )
    }
}