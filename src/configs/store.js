// @flow

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {cardDataReducer} from '../reducers/cardDataReducer';
import {passedCandidatesReducer} from '../reducers/passedCandidatesReducer';
import {validationStatusReducer} from '../reducers/validationStatusReducer';
import {candidates} from '../reducers/candidates';
import {selectedCandidatesReducer} from '../reducers/selectedCandidatesReducer';

const rootReducer = combineReducers({
  cardDataReducer,
  candidates,
  validationStatusReducer,
  passedCandidatesReducer,
  selectedCandidatesReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
