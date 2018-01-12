import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './components/HomePage.jsx';
import TestPage from './components/TestPage.jsx';

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/test" component={TestPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    )
  }
};

export default Routes;
