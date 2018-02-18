import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class HomeAsso extends Component {
  render() {
    return (
      <div className="banner" id="assos">
        <div className="container">
          <h1>COLLECT'</h1>
          <h2>Une solution du groupe Casino qui facilite les dons alimentaires via la blockchain</h2>

          <Link className="waves-effect waves-light btn-large linkCTA" to="/valider-don">Valider les dons</Link>
        </div>
      </div>
    );
  }
}