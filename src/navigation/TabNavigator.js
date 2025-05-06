import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomePage/Home';
import Setting from '../pages/Setting';
import { Ionicons } from '@expo/vector-icons'; 
import { useTheme } from '../context/ThemeContext';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const{theme}=useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor:theme.colors.background,
          height: 50,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -2 },
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 8,
        },
        tabBarActiveTintColor: theme.colors.activeColor,
        tabBarInactiveTintColor:theme.colors.inActiveColor,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}
