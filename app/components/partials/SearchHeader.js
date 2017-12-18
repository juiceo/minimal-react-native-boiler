import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    LayoutAnimation,
    Text,
    TouchableOpacity
} from 'react-native';

import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Sizes, Colors } from '../../themes/';

class SearchHeader extends PureComponent {

    static propTypes = {
        selectedSort: PropTypes.object,
        searchText: PropTypes.string,
        onTextChange: PropTypes.func,
        onSortChange: PropTypes.func
    };

    static defaultProps = {
        onSortChange: () => { },
        onTextChange: () => { }
    };

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    expand(expanded) {
        this.setState({
            expanded
        });
    }

    renderSortOptions() {
        return _.map(this.props.sortOptions, (option) => {
            return (
                <TouchableOpacity onPress={() => this.props.onSortChange(option)} key={option.sortField}>
                    <View style={styles.sortOption}>
                        <Text style={styles.sortLabel}>{option.label}</Text>
                        {this.props.selectedSort === option ?
                            <Icon name={'check'} size={20} color={Colors.BLACK} />
                            : null}
                    </View>
                </TouchableOpacity>
            );
        });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.searchField}
                    placeholder={this.state.expanded ? 'Search for a country' : 'Tap to search'}
                    placeholderTextColor={Colors.TEXT_DARK}
                    onChangeText={this.props.onTextChange}
                    value={this.props.searchText}
                    onFocus={() => this.expand(true)}
                    onEndEditing={() => this.expand(false)}
                    clearButtonMode={'while-editing'}
                    underlineColorAndroid={'transparent'}
                />
                {this.state.expanded ?
                    <View style={styles.sortWrapper}>
                        <Text style={styles.sortHeader}>{'Sort by:'}</Text>
                        {this.renderSortOptions()}
                    </View>
                    : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.LIGHT_GREY
    },
    searchField: {
        width: Sizes.SCREEN_WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.BASE_MARGIN,
        paddingVertical: Sizes.DOUBLE_MARGIN,
        textAlign: 'center',
        fontSize: Sizes.FONT_LARGE
    },
    sortOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: Sizes.BASE_MARGIN
    },
    sortHeader: {
        padding: Sizes.BASE_MARGIN,
        textAlign: 'left',
        fontWeight: 'bold'
    }
});

export default SearchHeader;