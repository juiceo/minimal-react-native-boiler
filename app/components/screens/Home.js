import React, { PropTypes, Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';

class Home extends Component {

    static propTypes = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{'Welcome Home'}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        countries: state.countries,
    };
}


export default connect(mapStateToProps)(Home);