import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
<<<<<<< HEAD
    TouchableOpacity,
=======
>>>>>>> 5a9661b89f6686ddfe708c2f972b81e8ad3a18b7
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import {Sizes, Colors, Styles} from '../../themes/';
import Actions from '../../actions/';


class Home extends Component {

    static navigatorStyle = {
        ...Styles.SCREEN_NO_HEADER
    };

    static propTypes = {
        pressCount: PropTypes.number
    };

    static contextTypes = {
        store: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        const {store} = this.context;

        store.dispatch(Actions.incrementPressCount());
    }

    render() {
        return (
<<<<<<< HEAD
            <View style={styles.wrapper}>
                <Text style={styles.title}>{'Minimal React Native Boiler'}</Text>
                <Text style={styles.subtitle}>{'Happy coding!'}</Text>

                <TouchableOpacity onPress={this.onButtonPress} activeOpacity={0.8}>
                    <Text style={styles.button}>{'You have pressed me ' + this.props.pressCount + ' times'}</Text>
                </TouchableOpacity>
=======
            <View>
                <Text style={styles.text}>{'Welcome Home aasfasdf'}</Text>
>>>>>>> 5a9661b89f6686ddfe708c2f972b81e8ad3a18b7
            </View>
        );
    }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    wrapper: {
        ...Styles.CENTERED_CONTAINER
    },
    title: {
        ...Styles.TEXT_TITLE_DARK
    },
    subtitle: {
        ...Styles.TEXT_BODY_DARK
    },
    button: {
        marginTop: Sizes.DOUBLE_MARGIN,
        padding: Sizes.BASE_MARGIN,
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE,
=======
    text: {
        color: 'red',
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'blue'
>>>>>>> 5a9661b89f6686ddfe708c2f972b81e8ad3a18b7
    }
});

function mapStateToProps(state) {
    return {
        pressCount: state.example.pressCount
    };
}


export default connect(mapStateToProps)(Home);