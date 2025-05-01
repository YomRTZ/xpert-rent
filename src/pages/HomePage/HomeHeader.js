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
            uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
          }}
          style={styles.headerImage}
        />
    </View>
  );
};
export default HomeHeader;
