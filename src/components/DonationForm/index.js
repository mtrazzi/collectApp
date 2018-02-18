import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    id: 1,
    name: 'Unicef',
    NF: '120000000',
    adresse: '104 Avenue du Président Kennedy 75016 Paris'
  },
  {
    id: 2,
    name: 'Les restos du coeur',
    NF: '170000000',
    adresse: '65 avenue des champs-élysées   75008 Paris'
  }
]

export default class DonationForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      date_donation: '18 février 2018',
      bon_livraison: '',
      store: stores[0],
      asso: null,
      supplies: [newSupply(), newSupply()],
      current: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreInputChange = this.handleStoreInputChange.bind(this);
    this.handleAssoInputChange = this.handleAssoInputChange.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  componentDidMount(){
    $('select').material_select();

    // Use Materialize custom select input
    $(ReactDOM.findDOMNode(this.refs.testSelect)).on('change',this.handleAssoChange.bind(this));
  }


  handleInputChange(event) {

    event.preventDefault();
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddProduct(event) {
    event.preventDefault();

    let supplies = this.state.supplies;

    supplies.push(newSupply())

    this.setState({
      supplies: supplies
    });
  }

  handleAssoChange(event) {

    const asso =  assos.filter( (asso) => asso.id == event.target.value )

    this.setState({
      asso: asso[0]
    });
  }

  handleStoreInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let store = this.state.store;

    store[name] = value;

    this.setState({
      store: store
    });
  }

  handleAssoInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let asso = this.state.asso;

    asso[name] = value;

    this.setState({
      asso: asso
    });
  }

  handleSupplyInputChange(event, id) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let supplies = this.state.supplies;

    supplies[id][name] = value;

    this.setState({
      supplies: supplies
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
                  <label htmlFor="date_donation" className="active">Date donation</label>
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
                    onChange={this.handleChange}>
                    <option value="0" disabled>Choisir le magasin donateur</option>
                    <option value="1">{stores[0].name}</option>
                  </select>
                  <label>Donateur</label>
                </div>

                <div className="input-field col s4">
                  <input 
                    value={this.state.store.NF}
                    id="NF_store" 
                    type="text" 
                    className="validate" 
                    name="NF"
                    onChange={this.handleStoreInputChange}
                  />
                  <label htmlFor="NF_store" className="active">NF</label>
                </div>
                
                <div className="input-field col s12">
                  <input 
                    value={this.state.store.adresse} 
                    id="adresse_store" 
                    type="text" 
                    className="validate" 
                    name="adresse"
                    onChange={this.handleStoreInputChange}
                  />
                  <label htmlFor="adresse_store" className="active">Adresse</label>
                </div>
              </div>
            </li>

            <li className="collection-item">
              <div className="row">
                <div className="input-field col s8">
                  <select 
                    value={this.state.asso ? this.state.asso.id : 0}
                    id="name_asso"
                    ref="testSelect"
                    onChange={this.handleChange}>
                  >
                    <option value="0" disabled>Choisir le bénéficiaire du don</option>
                    {assos.map((asso) => <option key={asso.id} value={asso.id}>{asso.name}</option>)}
                  </select>
                  <label htmlFor="name_asso">Bénéficiaire</label>
                </div>

                <div className="input-field col s4">
                  <input 
                    value={this.state.asso ? this.state.asso.NF : ''}
                    id="NF_asso" 
                    type="text" 
                    className="validate"  
                    name="NF"
                    onChange={this.handleAssoInputChange}
                  />
                  <label 
                    className={this.state.asso ? "active" : ""}
                    htmlFor="NF_asso"
                  >NF</label>
                </div>
                
                <div className="input-field col s12">
                  <input 
                    value={this.state.asso ? this.state.asso.adresse : ''}
                    id="adresse_asso" 
                    type="text" 
                    className="validate" 
                    name="adresse"
                    onChange={this.handleAssoInputChange}
                  />
                  <label 
                    className={this.state.asso ? "active" : ""}
                    htmlFor="adresse_asso"
                  >Adresse</label>
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

                <table>
                  <thead>
                    <tr>
                        <th>Code Produit</th>
                        <th>Lot Produit</th>
                        <th>Produit</th>
                        <th>Date Limite d'Utilisation Optimale</th>
                        <th>Volume</th>
                        <th>Valeur Unitaire €</th>
                        <th>Total €</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.supplies.map( (supply, key) => (
                      <tr key={key}>
                        <td>
                          <input
                            value={supply.code_produit}
                            name="code_produit"
                            type="text"
                            onChange={(event) => this.handleSupplyInputChange(event, key)}
                          />
                        </td>
                        <td>
                          <input
                            value={supply.lot_produit}
                            name="lot_produit"
                            type="text"
                            onChange={(event) => this.handleSupplyInputChange(event, key)}
                          />
                        </td>
                        <td>
                          <input
                            value={supply.name}
                            name="name"
                            type="text"
                            onChange={(event) => this.handleSupplyInputChange(event, key)}
                          />
                        </td>
                        <td>
                          <input
                            value={supply.DLUO}
                            name="DLUO"
                            type="text"
                            onChange={(event) => this.handleSupplyInputChange(event, key)}
                          />
                        </td>
                        <td>
                          <input
                            value={supply.volume}
                            name="volume"
                            type="text"
                            onChange={(event) => this.handleSupplyInputChange(event, key)}
                          />
                        </td>
                        <td>
                          <input
                            value={supply.valeurUnitaire}
                            name="valeurUnitaire"
                            type="text"
                            onChange={(event) => this.handleSupplyInputChange(event, key)}
                          />
                        </td>
                        <td>{supply.volume * supply.valeurUnitaire}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="right-align">
                  <button onClick={this.handleAddProduct} className="btn waves-effect waves-light">Autre produit</button>
                </div>
              </div>
            </li>
          </ul>

          <div className="center-align">
            <button className="btn waves-effect waves-light" onClick={(event) => {event.preventDefault(); this.props.onFormSubmit(this.state)}}>
              Enregistrer la donation
            </button>
          </div>

        </form>
      </div>
    </div>
    )
  }
}