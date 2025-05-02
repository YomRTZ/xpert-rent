import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avater';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
const Navbar = () => {
  const {theme}=useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical:16,
      backgroundColor:theme.colors.surface
    },
    leftContainer: {
      flexDirection: 'column',
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 15,
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Profile')}>
      <View style={styles.leftContainer}>
      <Avatar name="chimsa" role="owner" />
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="notifications-outline" size={24} color={theme.colors.iconColor} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};
export default Navbar;