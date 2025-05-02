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
            uri: "https://img.freepik.com/free-vector/hand-drawn-real-estate-template-design_23-2150574144.jpg?ga=GA1.1.1701151830.1742473452&semt=ais_hybrid&w=740",
          }}
          style={styles.headerImage}
        />
    </View>
  );
};
export default HomeHeader;
