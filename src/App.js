import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Routing</h1>
        </header>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
