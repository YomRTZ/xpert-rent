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
      backgroundColor:theme.colors.background,
      paddingBottom:"15%",
      paddingHorizontal:10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginVertical: 10,
      marginHorizontal:10
    },
    viewAll: {
      color: "#4a6fa5",
      fontSize: 14,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
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
      <View style={{ marginVertical: 10,backgroundColor:theme.colors.surface,paddingVertical:20}}>
      <HomeHeader />
      </View>
      {/* category */}
      <View style={{ marginVertical: 10,paddingVertical:20,backgroundColor:theme.colors.surface }}>
        <Text style={styles.title}>Categories</Text>
        <HouseCategory/>
      </View>
      {/* cards */}
    <View style={{ paddingVertical:20,backgroundColor:theme.colors.surface, marginVertical: 10}}>
    <View style={[styles.header,{marginVertical: 10}]}>
        <Text style={styles.title}>Popular nearest you</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
       <NearstHouse/>
    </View>
      <View style={{ marginVertical: 10,backgroundColor:theme.colors.surface,paddingVertical:20 }}>
      <View style={[styles.header,{marginVertical: 10}]}>
        <Text style={styles.title}>Popular nearest you</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
       <NearstHouse/>
      </View>
      </ScrollView>
      
    </View>
  );
}
