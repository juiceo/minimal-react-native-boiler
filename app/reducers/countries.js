import { updateState } from '../utils/reduxHelpers'
import * as ActionTypes from "../constants/actionTypes"

let initialState = {
    countries: [],
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REFRESH_COUNTRIES:

            const updates = {
                countries: action.payload,
                loading: false,
                error: false
            };
            state = updateState(state, updates);

            return state;
        default:
            return state;
    }
};

export default reducer;