import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import RoundImage from './RoundImage';
import { Sizes, Colors, Styles } from '../../themes/';

class GenericListItem extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        iconName: PropTypes.string,
        value: PropTypes.string,
    };

    render() {

        const { label, iconName, value } = this.props;

        return (
            <View style={styles.wrapper}>
                <View style={styles.iconWrapper}>
                    <Icon name={iconName} size={30} color={Colors.BLACK} />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: Sizes.SCREEN_WIDTH,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    iconWrapper: {
        width: 65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWrapper: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    label: {
        ...Styles.TEXT_TITLE_SECONDARY_DARK,
        color: Colors.GREY
    },
    value: {
        ...Styles.TEXT_BODY_DARK,
        marginTop: 4
    }
});

export default GenericListItem;