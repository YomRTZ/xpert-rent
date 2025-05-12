import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";
import { ScrollView } from "react-native-gesture-handler";
export default function HomeDetails() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingBottom: 20,
      backgroundColor: theme.colors.background,
    },
    image: {
      width: "100%",
      height: 250,
    },
    card: {
      backgroundColor: theme.colors.background,
      padding: 10,
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
      fontSize:theme.typography.fontSize.xl,
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontWeight:theme.typography.fontWeight.bold,
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
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      marginLeft: 5,
      fontSize: theme.typography.fontSize.sm,
    },
    statusTag: {
      backgroundColor:theme.colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 5,
      marginLeft: 10,
    },
    statusText: {
      color:"#fff",
      fontSize: 12,
    },
    price: {
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize:theme.typography.fontSize.xl,
      marginTop: 10,
      fontWeight:theme.typography.fontWeight.bold,
    },
    perMonth: {
      fontSize:theme.typography.fontSize.sm,
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      fontFamily:theme.typography.fontFamily.semiBold,
      color: theme.colors.header,
      fontSize: 16,
      fontWeight:theme.typography.fontWeight.bold,
      marginBottom: 6,
    },
    description: {
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize:theme.typography.fontSize.sm,
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
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.xl,
      fontWeight:theme.typography.fontWeight.bold,
    },
    specLabel: {
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: 12,
    },
    agentRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      justifyContent: "space-between",
    },
    agentImage: {
      width: 45,
      height: 45,
      borderRadius: 22.5,
      marginRight: 10,
    },
    agentName: {
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontWeight: theme.typography.fontWeight.bold,
    },
    agentRole: {
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontSize: 12,
    },
    socialIcons: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      backgroundColor:theme.colors.primary,
      padding: 14,
      borderRadius: 25,
      alignItems: "center",
      marginTop: 25,
    },
    buttonText: {
      fontFamily:theme.typography.fontFamily.regular,
      color: theme.colors.header,
      fontWeight:theme.typography.fontWeight.bold,
      fontSize: theme.typography.fontSize.md,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor:theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.container}>
     
<View> 
<Image
        source={{
          uri: "https://www.arhomes.com/wp-content/uploads/2022/11/Dawning_OptionalPool-Dusk.webp",
        }}
        style={styles.image}
      />
      </View>
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
            <Ionicons name="location-sharp" size={16} color={theme.colors.primary} />
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
            in Bole, Addis Ababa, Ethiopia & features 6
            bedrooms and 3 bathrooms. With its bright, open layout and elegant
            design, it offers a perfect mix of comfort & convenience near local
            shops and restaurants.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specification</Text>
          <View style={styles.specRow}>
            <View style={styles.specItem}>
              <Ionicons name="bed-outline" size={20} color={theme.colors.primary} />
              <Text style={styles.specText}>5</Text>
              <Text style={styles.specLabel}>Bedroom</Text>
            </View>
            <View style={styles.specItem}>
              <MaterialIcons name="bathtub" size={20} color={theme.colors.primary} />
              <Text style={styles.specText}>2</Text>
              <Text style={styles.specLabel}>Bathroom</Text>
            </View>
            <View style={styles.specItem}>
              <Ionicons name="resize" size={20} color={theme.colors.primary}/>
              <Text style={styles.specText}>500+</Text>
              <Text style={styles.specLabel}>Square Fit</Text>
            </View>
          </View>
        </View>

        <View style={styles.agentRow}>
          <View style={styles.avatar}>
                  <Ionicons name="person" size={20} color="white" />
                </View>
          <View>
            <Text style={styles.agentName}>Xpert-Housing</Text>
            <Text style={styles.agentRole}>Agent</Text>
          </View>
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
    </View>
  );
}
