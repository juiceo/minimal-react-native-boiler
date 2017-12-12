/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

let middleware = [thunk];

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}