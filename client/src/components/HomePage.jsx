import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        REACT + ELECTRON
        <Link to="/test">TEST PAGE</Link>
      </div>
    )
  }
};

export default HomePage;
