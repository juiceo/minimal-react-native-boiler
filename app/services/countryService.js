import { GET } from './http';
import 

const URL = 'https://restcountries.eu/rest/v2/all';

const CountryService = {
    getAllCountries: () => {
        return GET(URL);
    },
}

module.exports = CountryService;