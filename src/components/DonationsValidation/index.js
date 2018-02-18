import React, { Component } from 'react';


import './style.css';

export default class DonationsValidation extends Component {
  constructor(props){
    super(props);
  }

  render(){



    return (
      <div className="container">
        <h1>Donations</h1>

        <table className="validationDonTable">
          <thead>
            <tr>
              <th>Donateur</th>
              <th>Date</th>
              <th>Total €</th>
              <th>Valider donation</th>
            </tr>
          </thead>
          <tbody>
          {this.props.donations.map( (donation, id) => (
            <tr key={id}>
              <td>{donation.store.name}</td>
              <td>{donation.date_donation}</td>
              <td>{computeDonationPrice(donation)}</td>
              <td>
                {
                  donation.current ? 
                  <button onClick={(event) => { event.preventDefault(); this.props.validateDonation(id)}} className="btn waves-effect waves-light">Valider</button>
                  :
                  <p className="validationTruc">Validée</p>
                }
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const computeDonationPrice = (donation) => {
  let donationPrice = 0;

  donation.supplies.forEach((supply) => {
    donationPrice += supply.volume * supply.valeurUnitaire
  })
  return donationPrice;
}