import { combineReducers } from 'redux';
import donations from './donations';

const rootReducer = combineReducers({
  donations
});

export default rootReducer;