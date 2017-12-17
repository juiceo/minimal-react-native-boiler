'use strict'
import { Dimensions } from 'react-native';

const Sizes = {

    BASE_MARGIN: 10,
    DOUBLE_MARGIN: 20,
    
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,

    FONT_SMALL: 12,
    FONT_NORMAL: 14,
    FONT_LARGE: 16,
    FONT_XLARGE: 20
}

module.exports = Sizes;