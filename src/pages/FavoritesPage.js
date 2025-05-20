import React from 'react';
import { Text, FlatList, SafeAreaView,StyleSheet,View } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import Cards from '../components/Cards';
import { useTheme } from '../context/ThemeContext';
const FavoritesPage = () => {
  const { favorites } = useFavorites();
    const { theme } = useTheme();
const styles=StyleSheet.create({
    title: {
        fontSize: theme.typography.fontSize.xl,
        color: theme.colors.title,
        fontWeight: 'bold',
        marginVertical: 15,
      },
})
  return (
    <SafeAreaView style={{ padding: 10,backgroundColor:theme.colors.background,flex:1 }}>
         {/* <View style={{ padding: 10 }}> <Text style={styles.title}>Favorites</Text></View> */}
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <View style={{marginBottom:10}}><Cards image={item.image} /></View>}
       vertical
      />
    </SafeAreaView>
  );
};

export default FavoritesPage;
