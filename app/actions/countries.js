import * as ActionTypes from "../constants/actionTypes";

export function refreshCountries() {
    return (dispatch) => {

        //TODO: fetch countries
        setTimeout(() => {
            var data = [];
            dispatch({ type: ActionTypes.REFRESH_COUNTRIES, data });
        }, 2000);
    };
}