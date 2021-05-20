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
import Post from './src/components/posts';
import feed from '../Airbnb/assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];



const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView >
       {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <StatusBar  />
        
      {/* <HomeScreen /> */}

      <Post post={post1} />
      
      <Post post={post2} />

      <Post post={post3} />

  
    </SafeAreaView>
  );
};



export default App;
