const initState = [
 {
  date_donation: '16 février 2018',
  bon_livraison: '12345',
  current: true,
  store: {
    name: 'Casino Supermarché et drive Saint-etienne Bergson',
    adresse: '60 rue de Bergson 42000 SAINT ETIENNE',
    NF: '140000000'
  },
  asso: {
    id: 1,
    name: 'Unicef',
    NF: '120000000',
    adresse: '104 Avenue du Président Kennedy 75016 Paris'
  },
  supplies: [
    {
      code_produit: 'C1234567890000',
      lot_produit: 'C1234',
      produit: 'Lait',
      DLUO: '20 février 2018',
      volume: 200,
      valeurUnitaire: 0.79
    },
    {
      code_produit: 'C9874225600000',
      lot_produit: 'C1345',
      produit: 'Poisson',
      DLUO: '25 février 2018',
      volume: 150,
      valeurUnitaire: 20
    }
  ]
 },
];

const donations = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_DONATION':
      return [
        ...state,
        action.donation
      ]
    case 'VALIDATE_DONATION':
      const updatedItems = state.map( (item, id) => {
        if(id === action.donationId) {
          console.dir(item)
          return {
            ...item, 
            current: false
          }
          
        }
        return item;
      })
      return updatedItems;

      return state;
    default:
      return state;
  }
}

export default donations;