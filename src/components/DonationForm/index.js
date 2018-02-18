import React, { Component } from 'react';
import $ from 'jquery'; 
import 'materialize-css/dist/js/materialize.min.js'

const newSupply = () => ({
  code_produit: '',
  lot_produit: '',
  produit: '',
  DLUO: '',
  volume: 0,
  valeurUnitaire: 0
})


const stores = [
  {
    name: 'Casino Supermarché et drive Saint-etienne Bergson',
    adresse: '60 rue de Bergson 42000 SAINT ETIENNE',
    NF: '140000000'
  }
]

const assos = [
  {
    name: 'Unicef',
    NF: '120000000',
    adresse: '104 Avenue du Président Kennedy 75016 Paris'
  },
  {
    name: 'Les restos du coeur',
    NF: '170000000',
    adresse: '65 avenue des champs-élysées   75008 Paris'
  }
]

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      date_donation: '18 février 2018',
      bon_livraison: '',
      store: stores[0],
      asso: null,
      supplies: [newSupply(), newSupply()]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    $('select').material_select();
  }


  handleInputChange(event) {
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {

    return (
      <div className="container">
      <div className="row">
        <h4 className="center-align">Saisir les informations concernant la donation</h4>
        <form className="col s12">

          <ul className="collection">
            <li className="collection-item">
              <div className="row">
                <div className="input-field col s6">
                  <input 
                    value={this.state.date_donation}
                    id="date_donation" 
                    type="text" 
                    name="date_donation"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="date_donation">Date donation</label>
                </div>
                <div className="input-field col s6">
                  <input 
                    id="bon_livraison" 
                    type="text" 
                    className="validate" 
                    name="bon_livraison"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="bon_livraison">Bon de livraison n°</label>
                </div>
              </div>
            </li>

            <li className="collection-item">
              <div className="row">
                <div className="input-field col s8">
                  <select 
                    value={1} 
                    onChange={this.handleChange}>
                    <option value="0" disabled>Choisir le magasin donateur</option>
                    <option value="1">{stores[0].name}</option>
                  </select>
                  <label>Donateur</label>
                </div>

                <div className="input-field col s4">
                  <input value="140000000" id="NF_store" type="text" className="validate" />
                  <label htmlFor="NF_store">NF</label>
                </div>
                
                <div className="input-field col s12">
                  <input value="60 rue de Bergson 42000 SAINT ETIENNE" id="adresse_store" type="text" className="validate" />
                  <label htmlFor="adresse_store">Adresse</label>
                </div>
              </div>
            </li>

            <li className="collection-item">
              <div className="row">
                
                <div className="input-field col s8">
                  <select id="name_asso">
                    <option value="" disabled selected>Choisir le bénéficiaire du don</option>
                    <option value="1">Unicef</option>
                    <option value="2">Les restos du coeur</option>
                  </select>
                  <label htmlFor="name_asso">Bénéficiaire</label>
                </div>

                <div className="input-field col s4">
                  <input id="NF_asso" type="text" className="validate" />
                  <label htmlFor="NF_asso">NF</label>
                </div>
                
                <div className="input-field col s12">
                  <input id="adresse_asso" type="text" className="validate" />
                  <label htmlFor="adresse_asso">Adresse</label>
                </div>

                <div className="col s12">
                  <input type="checkbox" className="filled-in" id="organisation_festival" />
                  <label htmlFor="organisation_festival">Organisme ayant pour activité principale l'organisation de festivals</label>
                </div>

                <div className="col s12">
                  <input type="checkbox" className="filled-in" id="aide_gratuite" />
                  <label htmlFor="aide_gratuite">Association fournissant gratuitement une aide alimentaire ou des soins médicaux à des personnes en difficulté ou favorisant leur logement</label>
                </div>


              </div>
            </li>

            <li className="collection-item">
              <div className="row">
                {this.state.supplies.map( (supply, key) => <p key={key}>{key}</p>)}
                <button className="btn waves-effect waves-light">Autre produit</button>
              </div>
            </li>
          </ul>

          <div className="center-align">
            <button className="btn waves-effect waves-light" type="submit" name="action">
              Enregistrer la donation
            </button>
          </div>

        </form>
      </div>
    </div>
    )
  }
}