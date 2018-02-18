import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>COLLECT'</h1>
        <h2>une solution du groupe Casino qui facilite les dons alimentaires via la blockchain</h2>

        <Link to="/nouveau-don">Nouveau don</Link>
      </div>
    );
  }
}