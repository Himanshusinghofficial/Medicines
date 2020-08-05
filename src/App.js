import React, { Component } from 'react';
import Navbar from './Component/Navbar'
import Body from './Component/Body'
import './App.css';
import ApiState from './api/ApiState'

class App extends Component {

  render() {

    return (
      <ApiState>
        <div className='App'>
          <Navbar />
          <div style={{ margin: '0px 100px 0px 100px' }}>
            <Body />
          </div>
        </div>
      </ApiState>
    );
  }
}
export default App;
