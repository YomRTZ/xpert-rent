import React from 'react';
import { ScrollView, StyleSheet,} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
const HouseCategory = () => {
    const {theme}=useTheme();
    const styles = StyleSheet.create({
      container: {
        padding: 10,
      },
      categoryItem: {
        alignItems: 'center',
        marginRight: 20,
        flexDirection: 'row',
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
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryIcon}>
      
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
</ScrollView>
  );
};
const styles = StyleSheet.create({
});

export default HouseCategory;