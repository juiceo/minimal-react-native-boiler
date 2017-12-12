import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './app/screens';

import { configureStore } from './app/store/configureStore';
const store = configureStore({});

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'myApp.Home',
        title: 'Home',
        navigatorStyle: {},
        navigatorButtons: {}
    },
});