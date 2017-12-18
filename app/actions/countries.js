import _ from 'lodash';

import * as ActionTypes from '../constants/actionTypes';
import CountryService from '../services/countryService';

export function refreshCountries() {
    return async function (dispatch) {

        dispatch({
            type: ActionTypes.COUNTRIES_LOADING,
        });

        try {
            let response = await CountryService.getAllCountries();

            // Clean response data
            response = _.map(response, (country) => {
                if (!country.area) {
                    country.area = -1;
                }

                return country;
            });

            dispatch({
                type: ActionTypes.COUNTRIES_LOADED,
                payload: response
            });
        }
        catch (error) {
            dispatch({
                type: ActionTypes.COUNTRIES_ERROR,
            });
        }
    };
}