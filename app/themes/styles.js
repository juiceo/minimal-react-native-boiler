import Sizes from './sizes';
import Colors from './colors';

// It is a good idea to store commonly used styles here, so that they are consistent throughout the app

const Styles = {

    TEXT_TITLE_DARK: {
        fontSize: Sizes.FONT_XLARGE,
        color: Colors.TEXT_DARK
    },

    TEXT_TITLE_SECONDARY_DARK: {
        fontSize: Sizes.FONT_LARGE,
        color: Colors.TEXT_DARK,
    },

    TEXT_TITLE_LIGHT: {
        fontSize: Sizes.FONT_XLARGE,
        color: Colors.WHITE
    },
    TEXT_TITLE_SECONDARY_LIGHT: {
        fontSize: Sizes.FONT_LARGE,
        color: Colors.WHITE,
    },

    TEXT_BODY_DARK: {
        fontSize: Sizes.FONT_NORMAL,
        color: Colors.TEXT_DARK
    },

    TEXT_BODY_LIGHT: {
        fontSize: Sizes.FONT_NORMAL,
        color: Colors.WHITE
    },

    CENTERED_CONTAINER: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    SCREEN_NO_HEADER: {
        screenBackgroundColor: Colors.WHITE,
        navBarHidden: true
    },

    SCREEN_DEFAULT: {
        screenBackgroundColor: Colors.WHITE
    }
}

module.exports = Styles;