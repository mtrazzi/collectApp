import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DonationForm from './containers/donationForm';
import DonationsValidation from './containers/donationsValidation';
import Home from './components/Home';
import HomeAsso from './components/HomeAsso';
import Dashboard from './containers/dashboard';
import './App.css';
import logo from './Logo_collect_3.png';
import avatar from './ssaunier.jpg';

export default () => (
  <Router>
    <div>
      <ul className="navbar">
        <div className="navLeft">
          <li className="logo">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
          </li>
        </div>
        <div className="navRight">
          <li>
            <Link to="/nouveau-don">SAISIR UN DON</Link>
          </li>
          <li>
            <Link to="/valider-don">VALIDER UN DON</Link>
          </li>
          <li>
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
          <li className="avatar">
            <Link to="/homeAsso">
              <img src={avatar} alt="avatar"></img>
              <p>Damien</p>
            </Link>
          </li>
        </div>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/homeAsso" component={HomeAsso} />
      <Route path="/nouveau-don" component={DonationForm} />
      <Route path="/valider-don" component={DonationsValidation} />
      <Route path="/dashboard" component={Dashboard} />

      <footer>
        <div className="footer-links">
          Damien -
          Thomas -
          Kyota -
          Alexandre -
          Michaël -
          Luis -
          Karine -
          Marie-Isabelle
        </div>
        <div className="footer-copyright">
          Blockchain and Shop Hackathon - 18/02/2018
        </div>
      </footer>
    </div>
  </Router>
);