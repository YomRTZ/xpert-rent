import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
const HomeHeader = () => {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    headerImage:{
      width: "100%",
      height: 200,
      borderRadius:theme.radius.medium,
    }
  });
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJ-nWncfDkjMNwDQ42kg7Xk5yr21zQBFUHlBtlfeDaWSlxOhZP",
          }}
          style={styles.headerImage}
        />
    </View>
  );
};
export default HomeHeader;
