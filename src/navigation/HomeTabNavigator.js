import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../screens/home'
import homeOne from '../screens/home'
import homeTwo from '../screens/home'
import homeThree from '../screens/home'
import homeFour from '../screens/home'

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454'
        }} >

            <Tab.Screen name={"explore"} component={home} options={{
                tabBarIcon: ({ color }) => (
                    <Fontisto name="search" size={25} color={color} />
                ),
            }} />


            <Tab.Screen name={"Saved"} component={homeOne} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome  name="heart-o" size={25} color={color} />
                ),
            }} />


            <Tab.Screen name={"Airbnb"} component={homeTwo} options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="airbnb" size={25} color={color} />
                ),
            }} />

            <Tab.Screen name={"Messages"} component={homeThree} options={{
                tabBarIcon: ({ color }) => (
                    <Feather  name="message-square" size={25} color={color} />
                ),
            }} />

            <Tab.Screen name={"profile"} component={homeFour} options={{
                tabBarIcon: ({ color }) => (
                    <EvilIcons name="user" size={25} color={color} />
                ),
            }} />

        </Tab.Navigator>

    )
}
export default HomeTabNavigator;