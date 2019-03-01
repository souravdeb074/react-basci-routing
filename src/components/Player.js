import React, { Component } from 'react';
import PlayerAPI from '../api';

class FullRoster extends Component {
    
  render() {
      console.log(this.props);
      let id = this.props.match.params.number;
      console.log(id);
      const player = PlayerAPI.get(
        parseInt(id)
      )
      console.log(player);
    return (
      <div>
        <h3>{player.name}</h3><h4>{id}</h4>
      </div>
    );
  }
}

export default FullRoster;