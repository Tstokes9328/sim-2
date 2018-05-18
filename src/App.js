import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import route from './route';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
  }
}

export default App;
