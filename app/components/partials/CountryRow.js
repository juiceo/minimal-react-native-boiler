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

class CountryRow extends PureComponent {

    static propTypes = {
        country: PropTypes.object,
        onPress: PropTypes.func
    };

    render() {

        const { country } = this.props;

        return (
            <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress}>
                <View style={styles.wrapper}>
                    <RoundImage uri={country.flag} size={80} zoom={2} />
                    <View style={styles.textWrapper}>
                        <Text numberOfLines={1} style={styles.countryName}>{country.name}</Text>
                        <Text style={styles.population}>{'Population: ' + country.population}</Text>
                        <Text style={styles.landArea}>{country.area !== -1 ? 'Area: ' + country.area + ' sq. km' : 'Area: Unknown'}</Text>
                    </View>
                    <View style={styles.iconWrapper}>
                        <Icon name="chevron-right" size={20} color={Colors.GREY} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const IMAGE_SIZE = 80;

const styles = StyleSheet.create({
    wrapper: {
        padding: Sizes.BASE_MARGIN,
        flexDirection: 'row'
    },
    name: {
        padding: Sizes.BASE_MARGIN,
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE
    },
    imageWrapper: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        backgroundColor: Colors.LIGHT_GREY,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: IMAGE_SIZE * 2,
        height: IMAGE_SIZE * 2,
        position: 'absolute',
        top: IMAGE_SIZE / -2,
        left: IMAGE_SIZE / -2,
    },
    textWrapper: {
        flexDirection: 'column',
        paddingHorizontal: Sizes.BASE_MARGIN,
        flex: 1,
    },
    countryName: {
        ...Styles.TEXT_TITLE_DARK,
        alignSelf: 'stretch'
    },
    population: {
        ...Styles.TEXT_BODY_DARK
    },
    landArea: {
        ...Styles.TEXT_BODY_DARK
    },
    iconWrapper: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        width: 40
    }
});

export default CountryRow;