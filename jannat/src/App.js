import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login'

class App extends Component {

  render() {
    return (
      //<Home content="Jannat, coming soon...!"/>
      <div className="App">
        <header className="App-header">
          <h2 style={{display:'inline', float:'left', marginLeft:'10px', textDecoration: 'underline'}}>[ hamin ast... ]</h2>
          <h3 style={{display:'inline'}}>Gar firdaus bar-rue zamin ast, hami asto, hamin asto, hamin ast...</h3>
          <a href="" style={{display:'inline', float:'right', marginRight:'10px', color:'white'}}>signup</a>
          <a href="" style={{display:'inline', float:'right', marginRight:'10px', color:'white'}}>login</a>
        </header>
        <Login></Login>
        
      </div>
    );
  }
}

export default App;
  