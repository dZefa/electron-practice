import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        This is test page!
        <Link to="/">Back</Link>
      </div>
    )
  }
};

export default TestPage;
