import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/home/home';
import { COLORS, icons } from '../../Constants';
import styles from './styles';
import TabBarCustomBtn from './tabBarButton';
const BottomNavigator = createBottomTabNavigator();
export default function BottomTabs() {
    return (
        <BottomNavigator.Navigator initialRouteName='Home' screenOptions={({ route }) => {
            return {
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.secondary,
                tabBarStyle: styles.bottomTabBarStyle,
                tabBarShowLabel: false
            }
        }}>
            <BottomNavigator.Screen component={Home} name='Home' options={({ route, navigation }) => {
                return {
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode='contain'
                            style={[styles.icon, {
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }]} />
                    ),
                    tabBarButton: (props) => (<TabBarCustomBtn {...props} />),

                }
            }} />
            <BottomNavigator.Screen component={Home} name='Search' options={({ }) => {
                return {
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={[styles.icon, {
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }]} />
                    ),
                    tabBarButton: (props) => (<TabBarCustomBtn {...props} />)
                }
            }} />
            <BottomNavigator.Screen component={Home} name='Like' options={({ }) => {
                return {
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.like}
                            resizeMode='contain'
                            style={[styles.icon, {
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }]} />
                    ),
                    tabBarButton: (props) => (<TabBarCustomBtn {...props} />)
                }
            }} />
            <BottomNavigator.Screen component={Home} name='User'
                options={({ }) => {
                    return {
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                source={icons.user}
                                resizeMode='contain'
                                style={[styles.icon, {
                                    tintColor: focused ? COLORS.primary : COLORS.secondary
                                }]} />
                        ),
                        tabBarButton: (props) => (<TabBarCustomBtn {...props} />)
                    }
                }} />
        </BottomNavigator.Navigator>
    )
}