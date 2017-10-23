import React, { Component } from 'react';
import './App.scss';
import logo from '../../public/logo.jpg';

class App extends Component {
    render() {
        return (
            <div className="App-wrap">
                <img src={logo} className="App-logo" />
                <div className="icon"></div>
                <p className="App-logo">this is login page!!</p>
            </div>
        );
    }
}

export default App;
