import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import SVGImage from 'react-native-svg-image';
import _ from 'lodash';

import { Sizes, Colors, Styles } from '../../themes/';
import Actions from '../../actions/';
import CountryService from '../../services/countryService';
import RoundImage from '../partials/RoundImage';
import GenericListItem from '../partials/GenericListItem';

class CountryDetail extends Component {

    static navigatorStyle = {

    };

    static propTypes = {
        country: PropTypes.object
    };

    static contextTypes = {
        store: PropTypes.object
    };

    render() {

        const { country } = this.props;

        const currencies = _.map(country.currencies, 'name').join(', ');
        const languages = _.map(country.languages, 'name').join(', ');
        const callingCodes = _.map(country.callingCodes, (c) => '+' + c).join(', ');
        const timezones = country.timezones.join(', ');

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <RoundImage uri={country.flag} size={Sizes.SCREEN_WIDTH / 2} zoom={2} />
                </View>
                <GenericListItem iconName={'users'} label={'Population'} value={country.population.toString() + ' people'} />
                <View style={styles.separator} />
                <GenericListItem iconName={'area-chart'} label={'Land Area'} value={country.area !== -1 ? country.area.toString() + ' sq. kilometers' : 'Unknown'} />
                <View style={styles.separator} />
                <GenericListItem iconName={'clock-o'} label={'Timezones'} value={timezones} />
                <View style={styles.separator} />
                <GenericListItem iconName={'map-pin'} label={'Location'} value={country.subregion} />
                <View style={styles.separator} />
                <GenericListItem iconName={'money'} label={'Currencies'} value={currencies} />
                <View style={styles.separator} />
                <GenericListItem iconName={'language'} label={'Languages'} value={languages} />
                <View style={styles.separator} />
                <GenericListItem iconName={'phone'} label={'Calling codes'} value={callingCodes} />
                <View style={styles.separator} />
                <GenericListItem iconName={'internet-explorer'} label={'Domains'} value={country.topLevelDomain.join(', ')} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        height: Sizes.SCREEN_WIDTH * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.LIGHT_GREY
    },
    separator: {
        height: 1,
        backgroundColor: Colors.LIGHT_GREY
    }
});

function mapStateToProps(state) {
    return {
        countries: state.countries.all,
    };
}


export default connect(mapStateToProps)(CountryDetail);