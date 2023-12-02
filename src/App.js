import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App
