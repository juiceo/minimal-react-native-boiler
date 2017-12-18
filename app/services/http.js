import _ from 'lodash';

const DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

function POST(url, params = {}, headers = DEFAULT_HEADERS) {

    return fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(params)
    }).then((res) => res.json());
}

function GET(url, params = {}, headers = DEFAULT_HEADERS) {

    let query = "?";

    _.forOwn(params, (value, key) => {
        query += (key + '=' + value + '&');
    });

    url = url + query.slice(0, -1);

    return fetch(url, {
        method: 'GET',
        headers
    }).then((res) => res.json());
}


module.exports = {
    GET,
    POST
}