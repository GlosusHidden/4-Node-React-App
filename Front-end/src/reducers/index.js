import {combineReducers} from 'redux';
import Actions from './actions';

const allReducers = combineReducers ({
  action: Actions
});

export default allReducers;
