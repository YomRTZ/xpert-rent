import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import CircularCards from '../../components/CircularCards';

const HouseCategory = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CircularCards />
             <CircularCards />
             <CircularCards />
             <CircularCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default HouseCategory;