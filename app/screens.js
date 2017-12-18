import { Navigation } from 'react-native-navigation';

import HomeScreen from './components/screens/Home';
import CountryDetail from './components/screens/CountryDetail';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('myApp.Home', () => HomeScreen, store, Provider);
    Navigation.registerComponent('myApp.CountryDetail', () => CountryDetail, store, Provider);
    //TODO: register other screens here
}