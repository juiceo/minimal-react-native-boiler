import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import { connect } from 'react-redux';
import _ from 'lodash';
import fuzzysearch from 'fuzzysearch';

import { Sizes, Colors, Styles } from '../../themes/';
import Actions from '../../actions/';
import CountryService from '../../services/countryService';

import CountryRow from '../partials/CountryRow';
import SearchHeader from '../partials/SearchHeader';

const SORT_OPTIONS = [
    {
        label: 'A-Z',
        sortField: 'name'
    },
    {
        label: 'Land Area',
        sortField: 'area'
    },
    {
        label: 'Population',
        sortField: 'population'
    }
];

const ITEM_HEIGHT = 90;

class Home extends Component {

    static navigatorStyle = {
        ...Styles.SCREEN_DEFAULT
    };

    static propTypes = {
        countries: PropTypes.array,
        error: PropTypes.bool,
        loading: PropTypes.bool
    };

    static contextTypes = {
        store: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedSort: SORT_OPTIONS[0],
            searchText: '',
            reverse: false
        }

        this.refreshCountries = this.refreshCountries.bind(this);
    }

    componentWillMount() {
        this.refreshCountries();
    }

    refreshCountries() {
        this.context.store.dispatch(Actions.refreshCountries());
    }

    openCountryDetail(country) {

        this.props.navigator.push({
            screen: 'myApp.CountryDetail',
            title: country.name,
            passProps: {
                country
            }
        });
    }

    sort(countries) {

        let sorted = _.sortBy(countries, this.state.selectedSort.sortField);

        if (this.state.reverse) {
            sorted = _.reverse(sorted);
        }

        return sorted;
    }

    filter(countries) {
        return _.filter(countries, (c) => fuzzysearch(this.state.searchText, c.name));
    }

    onSortChange(selectedSort) {
        if (selectedSort === this.state.selectedSort) {
            this.setState({
                reverse: !this.state.reverse
            });
        }
        else {
            this.setState({ selectedSort });
        }
    }

    renderListEmpty() {

        if (this.props.loading) {
            return null;
        }

        if (this.props.error) {
            return (
                <View style={styles.emptyWrapper}>
                    <Text style={styles.emptyTitle}>{'Oh-oh!'}</Text>
                    <Text style={styles.emptySubtitle}>{'Looks like something went wrong when trying to get the list of countries. Make sure you are connected to the internet, or try again later.'}</Text>
                </View>
            );
        }

        if (this.state.searchText !== '') {
            return (
                <View style={styles.emptyWrapper}>
                    <Text style={styles.emptyTitle}>{'No matches for ' + this.state.searchText}</Text>
                    <Text style={styles.emptySubtitle}>{'Are you sure you typed the name correctly?'}</Text>
                </View>
            );
        }


        return null;
    }

    render() {

        const data = this.filter(this.sort(this.props.countries));

        return (
            <View style={styles.wrapper}>
                <SearchHeader
                    sortOptions={SORT_OPTIONS}
                    selectedSort={this.state.selectedSort}
                    searchText={this.state.searchText}
                    onSortChange={(selectedSort) => this.onSortChange(selectedSort)}
                    onTextChange={(searchText) => this.setState({ searchText })}
                />
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => <CountryRow height={ITEM_HEIGHT} country={item} onPress={() => this.openCountryDetail(item)} />}
                    keyExtractor={(item) => item.alpha3Code}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}

                    onRefresh={this.refreshCountries}
                    refreshing={this.props.loading}

                    ListEmptyComponent={() => this.renderListEmpty()}
                    initialNumToRender={6}
                    getItemLayout={(data, index) => (
                        { length: ITEM_HEIGHT, offset: (ITEM_HEIGHT * index) + index, index }
                    )}
                    removeClippedSubviews={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    list: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    separator: {
        height: 1,
        backgroundColor: Colors.LIGHT_GREY
    },
    emptyWrapper: {
        padding: Sizes.DOUBLE_MARGIN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyTitle: {
        fontSize: Sizes.FONT_LARGE,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    emptySubtitle: {
        marginTop: 5,
        textAlign: 'center'
    }
});

function mapStateToProps(state) {
    return {
        countries: state.countries.all,
        loading: state.countries.loading,
        error: state.countries.error
    };
}


export default connect(mapStateToProps)(Home);