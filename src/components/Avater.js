import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
const Avatar = ({ name, role }) => {
  const {theme}=useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#4a6fa5',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    textContainer: {
      flexDirection: 'column',
    },
    name: {
      fontSize: 12,
      fontWeight: 'bold',
      color: theme.colors.heading,
    },
    role: {
      fontSize: 10,
      color: theme.colors.title,
    },
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={20} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
};
export default Avatar;