// @flow

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {cardDataReducer} from '../reducers/cardDataReducer';
import {validationStatusReducer} from '../reducers/validationStatusReducer';

const rootReducer = combineReducers({
  cardDataReducer,
  validationStatusReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
