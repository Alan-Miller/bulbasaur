import React, { Component } from 'react';
import './App.css';
import Arena from './Arena/Arena';
import Header from './Header/Header';
import Wordnik from './Wordnik/Wordnik';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

    return (
        <div>
             <Header /> 
             <Switch> 
                <Route component={Arena} exact path="/" />
                <Route component={Wordnik} path="/wordnik" /> 
             </Switch> 
        </div>
    );
  }
}

export default App;