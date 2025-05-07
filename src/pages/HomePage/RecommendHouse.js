import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import RecommendHouseCard from '../../components/RecommendedHouseCard';

const RecomendHouse = () => {
  const styles = StyleSheet.create({});
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RecommendHouseCard image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"/>
      <RecommendHouseCard image="https://www.arhomes.com/wp-content/uploads/2022/11/Dawning_OptionalPool-Dusk.webp" />
      <RecommendHouseCard image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-YTGpA-_VBflyMGwxpIKNHcE5pl8BmNkbA&s"/>
      <RecommendHouseCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ys0y5NwFG7vEz-5vfD8KDzADADzs0Skj4g&s" />
    </ScrollView>
  );
};
export default RecomendHouse;