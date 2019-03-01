import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRoster from './FullRoster';
import Player from './Player';
class Roster extends Component {
  render() {
      console.log(this.props);
    return (
      <Switch>
          <Route exact path='/Roster' component={FullRoster} />
          <Route path='/Roster/:number' component={Player} />
      </Switch>
    );
  }
}

export default Roster;