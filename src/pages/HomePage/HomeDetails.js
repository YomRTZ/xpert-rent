import React, { useState, useEffect } from "react";
import Avatar from "../../components/Avater";
// import PropertyRepository from '../../repository/PropertyRepository';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import {
  GestureHandlerRootView,
  ScrollView,
  FlatList,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function HomeDetails() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => {
  //   PropertyRepository.getProperty();
  // }, []);

  const images = [
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image02.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image01-592x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image03-592x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image04-592x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image05-592x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image06.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image07-564x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image08-592x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image09-592x444.jpg",
    "https://ethiopiarealty.com/wp-content/uploads/2025/05/%F0%9D%90%92%F0%9D%90%9A%F0%9D%90%9F%F0%9D%90%9E-%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD-House-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A7%F0%9D%90%AD-in-Bole-Gated-Compound-Addis-Ababa-image10.jpg",
  ];

  const closeFullScreen = () => {
    setSelectedImage(null);
  };
  const { width: screenWidth } = Dimensions.get("window");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    image: {
      width: screenWidth,
      height:"100%"
    },
    fullScreenImageContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 10,
    },
    fullScreenImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    closeButton: {
      position: "absolute",
      top: 40,
      right: 20,
      backgroundColor: theme.colors.background,
      borderRadius: 50,
      padding: 10,
    },
    imageDivider: {
      width: "25%",
      height: 3,
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: [{ translateX: -50 }],
      backgroundColor: theme.colors.primary,
    },
    card: {
      paddingHorizontal: 10,
    },
    header: {
      marginBottom: 20,
    },
    titleSection: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: theme.typography.fontSize.xl,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontWeight: theme.typography.fontWeight.bold,
    },
    rating: {
      flexDirection: "row",
    },
    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 6,
    },
    location: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      marginLeft: 5,
      fontSize: theme.typography.fontSize.sm,
    },
    statusTag: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 5,
      marginLeft: 10,
    },
    statusText: {
      color: "#fff",
      fontSize: 12,
    },
    price: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.xl,
      marginTop: 10,
      fontWeight: theme.typography.fontWeight.bold,
    },
    perMonth: {
      fontSize: theme.typography.fontSize.sm,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      fontFamily: theme.typography.fontFamily.semiBold,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.md,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: 6,
    },
    description: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.sm,
      lineHeight: 20,
    },
    specRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    specItem: {
      alignItems: "center",
      flex: 1,
    },
    specText: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.xl,
      fontWeight: theme.typography.fontWeight.bold,
    },
    specLabel: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: 12,
    },
    agentRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      justifyContent: "space-between",
    },
    socialIcons: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      position: "absolute",
      bottom:0,
      zIndex:1,
      left: "50%",
      transform: [{ translateX: -125 }],
      backgroundColor: theme.colors.primary,
      padding: 14,
      width: 250,
      borderRadius: theme.radius.regular,
      alignItems: "center",
    },
    buttonText: {
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.header,
      fontWeight: theme.typography.fontWeight.bold,
      fontSize: theme.typography.fontSize.md,
    },
    scrollContainer: {
      height: 250,
    },
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      {selectedImage && (
        <View style={styles.fullScreenImageContainer}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.fullScreenImage}
          />
          <TouchableOpacity
            onPress={closeFullScreen}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={30} color={theme.colors.iconColor} />
          </TouchableOpacity>
        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={{
              width: screenWidth,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => setSelectedImage(image) }>
              <Image source={{ uri: image }} style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.imageDivider} />
          </View>
        ))}
      </ScrollView>
      <ScrollView style={styles.card}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>Gorgeous Apartment</Text>
            <View style={styles.rating}>
              {[...Array(4)].map((_, i) => (
                <FontAwesome key={i} name="star" size={16} color="#FFD700" />
              ))}
            </View>
          </View>

          <View style={styles.locationRow}>
            <Ionicons
              name="location-sharp"
              size={16}
              color={theme.colors.primary}
            />
            <Text style={styles.location}>AddisAbaba/Bole</Text>
            <View style={styles.statusTag}>
              <Text style={styles.statusText}>For Rent</Text>
            </View>
          </View>

          <Text style={styles.price}>
            $ 30000 <Text style={styles.perMonth}>/month</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Apartment</Text>
          <Text style={styles.description}>
            This <Text style={{ fontWeight: "bold" }}>Gorgeous Apartment</Text>
            in Bole, Addis Ababa, Ethiopia & features 6 bedrooms and 3
            bathrooms. With its bright, open layout and elegant design, it
            offers a perfect mix of comfort & convenience near local shops and
            restaurants.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specification</Text>
          <View style={styles.specRow}>
            <View style={styles.specItem}>
              <Ionicons
                name="bed-outline"
                size={20}
                color={theme.colors.primary}
              />
              <Text style={styles.specText}>5</Text>
              <Text style={styles.specLabel}>Bedroom</Text>
            </View>
            <View style={styles.specItem}>
              <MaterialIcons
                name="bathtub"
                size={20}
                color={theme.colors.primary}
              />
              <Text style={styles.specText}>2</Text>
              <Text style={styles.specLabel}>Bathroom</Text>
            </View>
            <View style={styles.specItem}>
              <Ionicons name="resize" size={20} color={theme.colors.primary} />
              <Text style={styles.specText}>500+</Text>
              <Text style={styles.specLabel}>Square Fit</Text>
            </View>
          </View>
        </View>

        <View style={styles.agentRow}>
          <Avatar name="chimsa" role="owner" />
          <View style={styles.socialIcons}>
            <Ionicons name="call" size={20} color={theme.colors.primary} />
            <Ionicons
              name="chatbox-ellipses"
              size={20}
              color={theme.colors.primary}
              style={{ marginLeft: 12 }}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Rent Now</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
