import React, { useState } from "react";
import { View, StyleSheet, Switch, Text, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../components/Avater";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Profile = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const insets = useSafeAreaInsets();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    darkMode: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 5,
      backgroundColor: theme.colors.surface,
    },
    leftContainer: {
      flexDirection: "column",
    },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: 15,
    },
    details: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 5,
      padding: 10,
      backgroundColor: theme.colors.surface,
    },
    input: {
      borderRadius: theme.radius.regular,
      paddingHorizontal: 15,
      color:theme.colors.title,
      paddingVertical: 10,
      backgroundColor: theme.colors.background,
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.regular,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    switchWrapper: {
      transform: [{ scaleX: 1.2 }, { scaleY: 0.9 }],
    },
  });
  return (
    <>
      <View style={{ paddingTop: insets.top, backgroundColor: theme.colors.background }} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 10, paddingBottom: 15 }}
        >
          <Ionicons name="arrow-back" size={30} color={theme.colors.title} />
        </TouchableOpacity>
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            paddingHorizontal: 5
          }}
        >
          <Avatar name="chimsa" role="owner" />
          <Ionicons
            name="notifications-outline"
            size={24}
            color={theme.colors.iconColor}
            style={styles.icon}
          />
        </View>
        <View style={styles.darkMode}>
          <Text style={{ marginLeft: 10, color: theme.colors.title }}>Dark Mode</Text>
          <View style={styles.switchWrapper}>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>
        </View>
        <View style={styles.details}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Ionicons name="person-outline" size={24} color={theme.colors.iconColor} />
            <Text style={{ marginLeft: 10, color: theme.colors.title }}>Personal Detail</Text>
          </View>

          <TouchableOpacity onPress={toggleDropdown}>
            <Ionicons
              name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
              size={24}
              color={theme.colors.iconColor}
            />
          </TouchableOpacity>
        </View>
        {isOpen && (
          <View style={{
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: theme.radius.sm,
            backgroundColor: theme.colors.surface,
            paddingBottom: 20
          }}>
            <View style={{ marginTop: 20 }}>
              <Text style={[theme.typography.sectionTitle(theme),{ fontWeight: theme.typography.fontWeight.regular, paddingHorizontal: 10,fontFamily:theme.typography.fontFamily.regular}]}>
                Full Name
              </Text>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={theme.colors.title}
                style={styles.input}
              />

              <Text style={[
                theme.typography.sectionTitle(theme),
                {
                  fontWeight: theme.typography.fontWeight.regular,
                  paddingHorizontal: 10,
                  marginTop: 10,
                  fontFamily:theme.typography.fontFamily.regular
                }
              ]}>
                Phone Number
              </Text>
              <TextInput
                placeholder=" +251 phone Number"
                placeholderTextColor={theme.colors.title}
                style={styles.input}
              />

              <Text style={[
                theme.typography.sectionTitle(theme),
                {
                  fontWeight: theme.typography.fontWeight.regular,
                  paddingHorizontal: 10,
                  marginTop: 10,
                  fontFamily:theme.typography.fontFamily.regular
                }
              ]}>
                Account Region
              </Text>
              <TextInput
                placeholder="Account Region"
                placeholderTextColor={theme.colors.title}
                style={styles.input}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};
export default Profile;
