import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DonationForm from './containers/donationForm';
import DonationsValidation from './containers/donationsValidation';
import Home from './components/Home';
import HomeAsso from './components/HomeAsso';
import Dashboard from './containers/dashboard';
import './App.css';
import logo from './Logo_collect_3.png';
import avatarNico from './thomas.jpg'
import avatarDamien from './ssaunier.jpg';

const NavbarAsso = ({onSwitchUser}) => (
  <ul className="navbar">
    <div className="navLeft">
      <li className="logo">
        <Link to="/homeAsso">
          <img src={logo} alt="logo"></img>
        </Link>
        <p>ASSOCIATION</p>
      </li>
    </div>
    <div className="navRight">
      <li>
        <Link to="/valider-don">VALIDER UN DON</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li className="avatar">
        <Link to="/" onClick={onSwitchUser}>
          <img src={avatarNico} alt="avatar"></img>
          <p>Nicolas</p>
        </Link>
      </li>
    </div>
  </ul>
)

const Navbar = ({onSwitchUser}) => (
  <ul className="navbar">
    <div className="navLeft">
      <li className="logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <p>CASINO</p>
      </li>
    </div>
    <div className="navRight">
      <li>
        <Link to="/nouveau-don">SAISIR UN DON</Link>
      </li>
      <li>
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li className="avatar">
        <Link to="/homeAsso" onClick={onSwitchUser}>
          <img src={avatarDamien} alt="avatar"></img>
          <p>Damien</p>
        </Link>
      </li>
    </div>
  </ul>
)

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      asso: false
    }
  }
  render(){
    return (
      <Router>
        <div>
          {this.state.asso ? 
            <NavbarAsso onSwitchUser={() => this.setState({ asso: false})} />
            :
            <Navbar onSwitchUser={() => this.setState({ asso: true})} />
          }

          <Route exact path="/" component={Home} />
          <Route path="/homeAsso" component={HomeAsso} />
          <Route path="/nouveau-don" component={DonationForm} />
          <Route path="/valider-don" component={DonationsValidation} />
          <Route path="/dashboard" component={Dashboard} />

        </div>
      </Router>
    )
  }
}

