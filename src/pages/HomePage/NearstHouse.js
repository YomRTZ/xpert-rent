import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import Cards from '../../components/Cards';

const NearstHouse = () => {
  const styles = StyleSheet.create({
  });
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJ_6OsfFkmz1aEr8uBx68VnrFbeGhvd1ADA&s"/>
      <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgrEaDtRXTToMcHTC984HpjZp1j0B0XHj3w&s" />
      <Cards image="https://www.arhomes.com/wp-content/uploads/2022/11/Dawning_OptionalPool-Dusk.webp" />
      <Cards image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEJF4PVaJpqxSJ5Gdc5ZJKi8YdinNjWhF6A&s" />
      <Cards image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" />
    </ScrollView>
  );
};
export default NearstHouse;