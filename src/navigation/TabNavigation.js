import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../utils/colors';


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    headerShown: false,
                    //tabBarLabel: 'Search'
                    tabBarActiveTintColor: colors.PRIMARY,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='search'
                            size={24}
                            color={color}
                        />
                    )
                }} />
            <Tab.Screen name='Fav' component={FavouriteScreen}
                options={{
                    headerShown: false,
                    //tabBarLabel: 'Search'
                    tabBarActiveTintColor: colors.PRIMARY,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='heart'
                            size={24}
                            color={color}
                        />
                    )
                }} />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={{
                    headerShown: false,
                    //tabBarLabel: 'Search'
                    tabBarActiveTintColor: colors.PRIMARY,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name='user-circle'
                            size={24}
                            color={color}
                        />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})