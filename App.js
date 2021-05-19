/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import HomeScreen from './src/screens/home';



const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView >
       {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <StatusBar  />
        
      <HomeScreen />

  
    </SafeAreaView>
  );
};



export default App;
