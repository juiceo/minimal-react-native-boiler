import { Navigation } from 'react-native-navigation';

import HomeScreen from './components/screens/Home';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('myApp.Home', () => HomeScreen, store, Provider);

    //TODO: register other screens here
}