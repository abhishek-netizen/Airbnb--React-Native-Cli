import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/GuestScreens';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResultsScreen from '../screens/SearchResults';
;
const Stack = createStackNavigator();

const Router = (props) => {
    return (
      
        <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen} options={{title: "Search your destination"}} />
                <Stack.Screen name={"Guest Screens"} component={GuestsScreen} options={{ title: "How many people?" }} />
                <Stack.Screen name={"SearchResults Screen"} component={SearchResultsScreen} options={{title:"Accommodation"}}  />                                             
        </Stack.Navigator>
            </NavigationContainer>

    )
}


export default Router;