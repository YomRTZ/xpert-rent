import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const CategoryCards = ({name,iconName}) => {
  const {theme}=useTheme();
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    categoryItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
       backgroundColor:theme.colors.surface,
       borderWidth: 0.5,
       borderColor: theme.colors.border,
    },
    categoryName: {
      fontSize: 14,
      fontWeight: '700',
      color: theme.colors.title,
      fontFamily:theme.typography.fontFamily.regular,
      marginLeft: 5
    },
  });
  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
            <MaterialCommunityIcons  name={iconName} size={24} color={theme.colors.iconColor} />
            </View>
            <Text style={styles.categoryName}>{name}</Text>
          </TouchableOpacity>
    </View>
  );
};



export default CategoryCards;