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
const Cards = ({image}) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      marginHorizontal:7,
      marginVertical:10
    },
    propertyCard: {
      width: 210,
      borderRadius:theme.radius.small,
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
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.propertyCard,theme.shadows.medium]} onPress={()=> navigation.navigate('HomeDetails')}>
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
