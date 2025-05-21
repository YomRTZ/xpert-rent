import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../context/FavoritesContext"
const Cards = ({image}) => {
  const { toggleFavorite, isFavorited } = useFavorites();
  const navigation = useNavigation();
  const { theme } = useTheme();
  const isBookmarked = isFavorited({ image });
  const styles = StyleSheet.create({
    container: {
      marginHorizontal:7,
    },
    propertyCard: {
      width: 210,
      borderRadius:theme.radius.small ,
      backgroundColor:theme.colors.surface, 
    },
    propertyImage: {
      width: "100%",
      height: 150,
      borderTopLeftRadius: theme.radius.small,
      borderTopRightRadius: theme.radius.small,
    },
    propertyDetails: {
      paddingVertical: 12,
      paddingHorizontal:10,
    },
    propertyPrice: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
      color: theme.colors.title,
      fontFamily:theme.typography.fontFamily.semiBold,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
      color: theme.colors.title,
      fontFamily:theme.typography.fontFamily.regular,
    },
    rating: {
      marginLeft: 4,
      fontSize: 14,
      color: theme.colors.title,
    },
    propertyAddress: {
      fontSize: 14,
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
    },
    bookmark:{
      position:"absolute",
      zIndex:999,
      right:5,
      top:5,
    }
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.propertyCard,theme.shadows.medium]} onPress={()=> navigation.navigate('HomeDetails')}>
      <TouchableOpacity style={styles.bookmark} onPress={() => toggleFavorite({ image })}>
          <Ionicons
            name={isBookmarked ? "heart" : "heart-outline"}
            size={28}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <Image
          source={{ uri:image}}
          style={styles.propertyImage}
        />
        <View style={styles.propertyDetails}>
          <Text style={styles.propertyPrice}>$1234/month</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>5</Text>
          </View>
          <Text style={styles.propertyAddress}>AddisAbaba/Bole</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Cards;
