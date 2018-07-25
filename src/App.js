import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SampleComponent from './components/SampleComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wide-container">
          <SampleComponent />
        </div>

        <div className="narrow-container">
          <SampleComponent />
        </div>
      </div>
    );
  }
}

export default App;
