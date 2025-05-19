import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Profile from '../pages/Profile';
import HomeDetails from "../pages/HomePage/HomeDetails";
import AddProperty from "../pages/property/AddProperty";
import PropertyUpdate from "../pages/property/PropertyUpdate";
import TenantData from '../pages/ownerPage/TenantData';
import PropertyManagement from '../pages/ownerPage/PropertyManagement';
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="HomeDetails" component={HomeDetails} />
        <Stack.Screen name="AddProperty" component={AddProperty} />
        <Stack.Screen name="PropertyUpdate" component={PropertyUpdate} />
        <Stack.Screen name="TenantData" component={TenantData}/>
        <Stack.Screen name="PropertyManagement" component={PropertyManagement}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
