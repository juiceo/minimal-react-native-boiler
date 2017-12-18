import { combineReducers } from 'redux';

import countries from './countries';

const rootReducer = combineReducers({
    countries,
    // TODO: Add other reducers here
});

export default rootReducer;