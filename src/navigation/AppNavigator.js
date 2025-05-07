import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Profile from '../pages/Profile';
import HomeDetails from "../pages/HomePage/HomeDetails";
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HomeDetails" component={HomeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
