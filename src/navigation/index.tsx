import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/home';
import Order from '../screens/order/order';
import Map from '../screens/map/map';
import BottomTabs from './bottomTabs/bottomTabs';

const StackNavigator = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName='Root' screenOptions={({ navigation }) => {
        return {
          headerShown: false,
        }
      }}>
        <StackNavigator.Screen component={BottomTabs} name='Root' />
        <StackNavigator.Screen component={Order} name='Order' />
        <StackNavigator.Screen component={Map} name='Map' />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}