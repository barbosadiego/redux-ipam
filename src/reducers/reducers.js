import { combineReducers } from 'redux';
import estadoReducer from './estadoReducer';
import cidadesReducer from './cidadesReducer';

export default combineReducers({ estadoReducer, cidadesReducer });
