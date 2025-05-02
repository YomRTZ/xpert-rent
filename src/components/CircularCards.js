import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
const CircularCards = ({name,image}) => {
  const {theme}=useTheme();
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    categoryItem: {
      alignItems: 'center',
      marginRight: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10

    },
    categoryImage: {
      width: 60,
      height: 60,
      borderRadius: 40,
      // marginBottom: 8,
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
              <Image
                       source={{ uri:image}}
                       style={styles.categoryImage}
                     />
            </View>
            <Text style={styles.categoryName}>{name}</Text>
          </TouchableOpacity>
    </View>
  );
};



export default CircularCards;