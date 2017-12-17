import { updateState } from '../utils/reduxHelpers'
import * as ActionTypes from "../constants/actionTypes"

let initialState = {
    pressCount: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.EXAMPLE_ACTION:

            const updates = {
                pressCount: state.pressCount + 1
            };
            state = updateState(state, updates);

            return state;
        default:
            return state;
    }
};

export default reducer;