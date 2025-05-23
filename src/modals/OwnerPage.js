import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import Avatar from "../components/Avater";
import { useNavigation } from "@react-navigation/native";
export default function OwnerPage({refRBSheet}) {
  const { theme } = useTheme();
  const navigation=useNavigation();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height:"100%",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      borderTopLeftRadius: theme.radius.medium,
      padding: 20,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      marginVertical: "5%",
    },
    buttonColumns: {
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
    },
    sectionTitle: {
      fontFamily: theme.typography.fontFamily.semiBold,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.regular,
      marginBottom: 6,
    },
    title: {
      fontSize: theme.typography.fontSize.md,
      fontWeight: "bold",
      marginVertical: 5,
      marginHorizontal: 10,
      color: theme.colors.title,
      fontFamily: theme.typography.fontFamily.semiBold,
    },
  });
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: theme.radius.medium,
      }}
    >
      <View
        style={{
          alignItems: "start",
          justifyContent: "space-between",
          paddingHorizontal: "2%",
          paddingVertical: "10",
        }}
      >
        <Avatar
          name="Chimsa"
          role="Owner"
          avatarStyle={{ width: 50, height: 50, borderRadius: 25,borderRadius:50 }}
          nameStyle={{ fontSize:theme.typography.fontSize.sm, fontWeight:theme.typography.fontWeight.regular }}
          roleStyle={{ fontSize: 10, color: theme.colors.title }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Owner Page</Text>
        <View style={styles.buttonColumns}>
          <View style={styles.buttonRow}>
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={30}
                color={theme.colors.iconColor}
              />
              <Text style={styles.sectionTitle}>Dashboard</Text>
            </View>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {refRBSheet?.current?.close(),navigation.navigate("AddProperty")}}>
              <MaterialCommunityIcons
                name="home-plus-outline"
                size={30}
                color={theme.colors.iconColor}
              />
              <Text style={styles.sectionTitle}>AddProperty</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {refRBSheet?.current?.close(),navigation.navigate("PropertyManagement")}}>
              <MaterialCommunityIcons
                name="home-group"
                size={30}
                color={theme.colors.iconColor}
              />
              <Text style={styles.sectionTitle}>Properties</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {refRBSheet?.current?.close(),navigation.navigate("TenantData")}}>
              <MaterialCommunityIcons
                name="account-group-outline"
                size={30}
                color={theme.colors.iconColor}
              />
              <Text style={styles.sectionTitle}>Tenants</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="bank"
                size={30}
                color={theme.colors.iconColor}
              />
              <Text style={styles.sectionTitle}>Payments</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name="bank-minus"
                size={30}
                color={theme.colors.iconColor}
              />
              <Text style={styles.sectionTitle}>Expenses</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
