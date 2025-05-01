import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import Cards from '../../components/Cards';

const NearstHouse = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Cards />
      <Cards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
});

export default NearstHouse;