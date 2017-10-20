import React, { Component } from 'react';
import '../css/App.scss';
import yaoqing from '../img/yaoqing.png';

class App extends Component {
    render() {
        return (
            <div className="App-wrap">
                <img src={yaoqing} className="App-logo" />
                <div className="icon"></div>
                <p className="App-logo">this is login page!!</p>
            </div>
        );
    }
}

export default App;
