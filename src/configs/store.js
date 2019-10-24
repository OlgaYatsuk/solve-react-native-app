// @flow

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cardDataReducer} from '../reducers/cardDataReducer';
import {validationStatusReducer} from '../reducers/validationStatusReducer';

const rootReducer = combineReducers({
  cardDataReducer,
  validationStatusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
