import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
class Header extends Component {
  render() {

    const customStyle = {
      "marginTop" : "30px",
      "backgroundColor": "#ffffff",
      "display": "flex"
    }

    //const rosterClass = location.pathname.match(/^\/roster/) ? "App-title" : "App-intro";
    
    return (
      <div className="App">
        <header>
        <nav>
          <ul style={customStyle}>
            <li><NavLink exact to='/' activeClassName="selected">Home</NavLink></li>
            <li><NavLink to='/roster' activeClassName="selected">Roster</NavLink></li>
            <li><NavLink to='/schedule' activeClassName="selected">Schedule</NavLink></li>
          </ul>
        </nav>
        </header>
      </div>
    );
  }
}

export default Header;