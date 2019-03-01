import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlayerAPI from '../api';

class FullRoster extends Component {
    
  render() {
      const location = this.props.location;
      console.log(location);
      const rosterClass = location.pathname.match(/^\/roster/) ? "App-title" : "App-intro";
      let data = PlayerAPI.all().map(res => (
        <li key={res.number} className={rosterClass}>
            <Link to={`/Roster/${res.number}`}>{res.name}</Link>
        </li>
    ))
    return (
      <div>
          <ul>
              {data}
            </ul>
      </div>
    );
  }
}

export default FullRoster;