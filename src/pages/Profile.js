import React from 'react';
import { View, StyleSheet, Switch,Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avater';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
const Profile = () => {
  const navigation = useNavigation();
    const { theme, toggleTheme, isDarkMode } = useTheme();
  return (
   <View>
   <View style={[styles.container,{backgroundColor: theme.colors.background}]}>
      <View style={styles.leftContainer}>
      <Avatar name="chimsa" role="owner" />
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      </View> 
    </View>
    <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name="arrow-back" size={24} color={theme.colors.title}/></TouchableOpacity>
    <View style={styles.darkMode}>
    <Text style={{ marginRight: 10 }}>
    Dark Mode 
  </Text>
  <Switch
    value={isDarkMode}
    onValueChange={toggleTheme}
  />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:"10%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  darkMode:{flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4a6fa5',
    padding:10,
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

export default Profile;