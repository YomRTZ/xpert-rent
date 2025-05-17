import React,{useState} from "react";
import { View, StyleSheet, Switch, Text, TouchableOpacity,TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../components/Avater";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeContext";
const Profile = () => {
  const navigation = useNavigation();
  const { theme, toggleTheme, isDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: theme.colors.background,
    },

    darkMode: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
    details:{
    flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop:5,
      padding:10,
      backgroundColor: theme.colors.surface,
    },
     input: {
      borderRadius: theme.radius.regular,
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: theme.colors.background,
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.regular,
      marginHorizontal:10,
      marginVertical:5,
    },
      sectionTitle: {
      fontFamily: theme.typography.fontFamily.semiBold,
      color: theme.colors.title,
      fontSize: theme.typography.fontSize.md,
      fontWeight: theme.typography.fontWeight.bold,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 10 }}
      >
        <Ionicons name="arrow-back" size={30} color={theme.colors.title} />
      </TouchableOpacity>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom:10
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
        <Text style={{ marginLeft: 10,color:theme.colors.title }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
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
            <Text style={[
              styles.sectionTitle,
              {
                fontWeight: theme.typography.fontWeight.regular,
                paddingHorizontal: 10
              }
            ]}>
              Full Name
            </Text>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={theme.colors.title}
              style={styles.input}
            />

            <Text style={[
              styles.sectionTitle,
              {
                fontWeight: theme.typography.fontWeight.regular,
                paddingHorizontal: 10,
                marginTop: 10
              }
            ]}>
              Phone Number
            </Text>
            <TextInput
              placeholder="+251 phone Number"
              placeholderTextColor={theme.colors.title}
              style={styles.input}
            />

            <Text style={[
              styles.sectionTitle,
              {
                fontWeight: theme.typography.fontWeight.regular,
                paddingHorizontal: 10,
                marginTop: 10
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
  );
};
export default Profile;
