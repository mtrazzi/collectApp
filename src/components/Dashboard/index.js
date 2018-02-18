import React, { Component } from 'react';

import metric1 from'./metric1.png';
import metric2 from'./metric2.png';
import metric3 from'./metric3.png';
import metric4 from'./metric4.png';

import metric5 from'./metric5.png';
import metric6 from'./metric6.png';

import restos from'./restos.pdf';
import unicef from'./unicef.pdf';


import './style.css';

export default class Dashboard extends Component {
  render(){
    return (
      <div className="container">

        <div className="metricsWrapper">
          <img className="metricImg" src={metric1} />
          <img className="metricImg" src={metric2} />
          <img className="metricImg" src={metric3} />
          <img className="metricImg" src={metric4} />
        </div>

        <div className="metricsWrapper">
          <img className="graphImg" src={metric5} />
          <img className="graphImg" src={metric6} />
        </div>

        <div className="donationsTable">
          <h3>Liste des dons</h3>

          <table className="striped">
            <thead>
              <tr>
                <th>Date de donation</th>
                <th>Magasin</th>
                <th>Bénéficiaire</th>
                <th>Montant (en €)</th>
                <th>Cerfa</th>
              </tr>
            </thead>
            <tbody>
              {this.props.donations.map( (donation, id) => (
                <tr key={id}>
                  <td>{donation.date_donation}</td>
                  <td>{donation.store.name}</td>
                  <td>{donation.asso.name}</td>
                  <td>{computeDonationPrice(donation)}</td>
                  <td>
                    {donation.asso.name == 'Unicef' ?
                      <a href={unicef} target='_blank' className='nav-link'>Ouvrir</a>
                      :
                      <a href={restos} target='_blank' className='nav-link'>Ouvrir</a>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const computeDonationPrice = (donation) => {
  let donationPrice = 0;

  donation.supplies.forEach((supply) => {
    donationPrice += supply.volume * supply.valeurUnitaire
  })
  return donationPrice;
}