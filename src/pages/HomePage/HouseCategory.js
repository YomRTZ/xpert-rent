import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import CategoryCards from '../../components/CategoryCards';
import {useTheme} from '../../context/ThemeContext';
const HouseCategory = () => {
    const {theme}=useTheme();
    const styles = StyleSheet.create({});
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <CategoryCards name="Apartment" iconName="home-city-outline" />
             <CategoryCards name="Condominium" iconName="office-building"/>
             <CategoryCards name="Ground house" iconName="home" />
    </ScrollView>
  );
};
export default HouseCategory;