import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
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
                <Text style={styles.text}>{'Welcome Home aasfasdf'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'blue'
    }
});

function mapStateToProps(state) {
    return {
        countries: state.countries,
    };
}


export default connect(mapStateToProps)(Home);