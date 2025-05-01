import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
const CircularCards = () => {
  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <Image
                       source={{ uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" }}
                       style={styles.categoryImage}
                     />
            </View>
            <Text style={styles.categoryName}>name</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CircularCards;