import { updateState } from '../utils/reduxHelpers'
import * as ActionTypes from "../constants/actionTypes"

let initialState = {
    all: [],
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.COUNTRIES_LOADED:

            return updateState(state, {
                all: action.payload,
                loading: false,
                error: false
            });

        case ActionTypes.COUNTRIES_LOADING:

            return updateState(state, {
                loading: true,
                error: false
            });

        case ActionTypes.COUNTRIES_ERROR:

            return updateState(state, {
                loading: false,
                error: true
            });

        default:
            return state;
    }
};

export default reducer;