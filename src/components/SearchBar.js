import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "../context/ThemeContext";
const SearchBar = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingBottom: 16,
      backgroundColor:theme.colors.surface,
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:theme.colors.background,
      borderRadius: theme.radius.medium,
      paddingHorizontal: 12,
    },
    input: {
      flex: 1,
      height: 45,
      paddingHorizontal: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search for house..."
          placeholderTextColor="gray"
        />
        <Ionicons name="options" size={20} color={theme.colors.iconColor} />
        </View>
     
    </View>
  );
};



export default SearchBar;