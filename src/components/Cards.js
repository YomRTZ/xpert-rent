import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
const Cards = ({image}) => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    propertyCard: {
      width: 250,
      borderRadius:theme.radius.medium,
      backgroundColor: "#fff",
      marginRight: 5,
      marginVertical: 10,
    },
    propertyImage: {
      width: "100%",
      height: 150,
      borderRadius: theme.radius.medium,
    },
    propertyDetails: {
      padding: 12,
    },
    propertyPrice: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 4,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
    },
    rating: {
      marginLeft: 4,
      fontSize: 14,
    },
    propertyAddress: {
      fontSize: 14,
      color: "gray",
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.propertyCard,theme.shadows.medium]}>
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
