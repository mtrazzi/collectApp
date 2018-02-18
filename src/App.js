import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DonationForm from './containers/donationForm';
import DonationsValidation from './containers/donationsValidation';

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/nouveau-don">Saisir don</Link>
        </li>
        <li>
          <Link to="/valider-don">Valider don</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/nouveau-don" component={DonationForm} />
      <Route path="/valider-don" component={DonationsValidation} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);