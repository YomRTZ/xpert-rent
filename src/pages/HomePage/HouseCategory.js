import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import CategoryCards from '../../components/CategoryCards';

const HouseCategory = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <CategoryCards name="Apartment" iconName="home-city-outline" />
             <CategoryCards name="Condominium" iconName="office-building"/>
             <CategoryCards name="Ground house" iconName="home" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
});

export default HouseCategory;