import { View, Text, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "./HomeHeader";
import SearchBar from "../../components/SearchBar";
import Navbar from "../Navbar";
import NearstHouse from "./NearstHouse";
import HouseCategory from "./HouseCategory";
import { useTheme } from "../../context/ThemeContext";
export default function Home() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:"10%",
    },
    title: {
      fontSize: theme.typography.fontSize.md,
      fontWeight: "bold",
      marginVertical:5,
      marginHorizontal:10,
      color:theme.colors.heading,
      fontFamily:theme.typography.fontFamily.semiBold
    },
    viewAll: {
      color: theme.colors.primary,
      fontSize:theme.typography.fontSize.sm,
      marginHorizontal:10
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom:5,
     
    },
  });
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      {/* nav */}
      <Navbar />
      {/* search bar */}
      <SearchBar />
      <ScrollView  showsVerticalScrollIndicator={false}>
      {/* header */}
      <View style={{backgroundColor:theme.colors.surface,paddingVertical:20,marginVertical:5}}>
      <HomeHeader />
      </View>
      {/* category */}
      <View style={{ marginVertical:5,backgroundColor:theme.colors.surface }}>
        <Text style={styles.title}>Categories</Text>
        <HouseCategory/>
      </View>
      {/* cards */}
    <View style={{ paddingVertical:5,backgroundColor:theme.colors.surface, marginVertical:5}}>
    <View style={[styles.header]}>
        <Text style={styles.title}>Popular nearest you</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
       <NearstHouse/>
    </View>
      <View style={{backgroundColor:theme.colors.surface,paddingVertical:5,marginVertical:5 }}>
      <View style={[styles.header]}>
        <Text style={styles.title}>Popular nearest you</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
       <NearstHouse/>
      </View>
      </ScrollView>
    </View>
  );
}
