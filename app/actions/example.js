import * as ActionTypes from "../constants/actionTypes";

export function incrementPressCount() {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.EXAMPLE_ACTION,
            payload: null
        });
    };
}