import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avater';
import { useNavigation } from '@react-navigation/native';
const Navbar = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Profile')}>
      <View style={styles.leftContainer}>
      <Avatar name="chimsa" role="owner" />
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical:16,
  },
  leftContainer: {
    flexDirection: 'column',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    marginRight: 15,
  },
});

export default Navbar;