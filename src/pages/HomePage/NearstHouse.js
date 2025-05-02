import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import Cards from '../../components/Cards';

const NearstHouse = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Cards image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"/>
      <Cards image="https://www.arhomes.com/wp-content/uploads/2022/11/Dawning_OptionalPool-Dusk.webp" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
});

export default NearstHouse;