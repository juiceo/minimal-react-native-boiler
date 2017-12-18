import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

import SVGImage from 'react-native-svg-image';

class RoundImage extends PureComponent {

    static propTypes = {
        uri: PropTypes.string,
        size: PropTypes.number,
        zoom: PropTypes.number,
    };

    static defaultProps = {
        zoom: 1,
        size: 80
    };

    render() {

        const { uri, size, zoom } = this.props;

        const wrapperStyle = {
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
            height: size,
            borderRadius: size / 2
        };

        const imageStyle = {
            position: 'absolute',
            width: size * zoom,
            height: size * zoom,
            top: -size * (zoom - 1) / 2,
            left: -size * (zoom - 1) / 2
        }

        return (
            <View style={wrapperStyle}>
                <SVGImage
                    style={imageStyle}
                    source={{ uri }}
                    scrollEnabled={false}
                    renderLoading={null}
                />
            </View>
        );
    }
}

export default RoundImage;