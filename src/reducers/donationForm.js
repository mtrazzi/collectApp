const initState = {
  supplies: [{}, {}]
}

const newDonation = (state = initState, action) => {
  switch(action.type) {
    case 'SET_NEW_DONATION': 
      return action.donation;
    case 'ADD_SUPPLY':
      return {
        ...state,
        supplies: [...state.supplies, {}]
      }
    default:
      return state;
  }
}

export default newDonation;