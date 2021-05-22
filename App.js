/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
// import {Entypo} from 'react-native-vector-icons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from './src/navigation/Router';

// import HomeScreen from './src/screens/home';
// import feed from '../Airbnb/assets/data/feed';
// import SearchResultsScreen from '../Airbnb/src/screens/SearchResults';
// import DestinationSearchScreen from '../Airbnb/src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/GuestScreens';





const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
    {/* <SafeAreaView > */}
       {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <StatusBar  /> */}
        
      <Router/>





      {/* </SafeAreaView> */}
    </>
  );
};



export default App;
