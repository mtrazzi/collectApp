import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div className="banner" id="casino">
        <div className="container">
          <h1>COLLECT'</h1>
          <h2>Une solution du groupe Casino qui facilite les dons alimentaires via la blockchain</h2>

          <Link className="waves-effect waves-light btn-large linkCTA" to="/nouveau-don">Nouveau don</Link>
        </div>
      </div>
    );
  }
}