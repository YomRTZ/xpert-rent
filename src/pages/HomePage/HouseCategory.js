import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import CircularCards from '../../components/CircularCards';

const HouseCategory = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <CircularCards name="Apartment" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSmLiT8oEm17hs0met89cO8BaqdFvNChnWw&s" />
             <CircularCards name="Condominium" image="https://borkena.com/wp-content/uploads/2022/08/Addis-Ababa-Condominium-_-Addis-Ababa.jpg"/>
             <CircularCards name="Ground house " image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9P4aZsiiNYkVAZf9Ln-y74gNzdQRYXVk0Q&s"/>
             <CircularCards name="Rooms" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ884xf6gPqKdq1YGQD4aao9ws3YDiVdufg&s" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
});

export default HouseCategory;