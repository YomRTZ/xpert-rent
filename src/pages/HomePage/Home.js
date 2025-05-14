import { View, Text, StyleSheet, ScrollView } from "react-native";
import HomeHeader from "./HomeHeader";
import SearchBar from "../../components/SearchBar";
import Navbar from "../Navbar";
import NearstHouse from "./NearstHouse";
import HouseCategory from "./HouseCategory";
import { useTheme } from "../../context/ThemeContext";
import RecommendHouse from "./RecommendHouse";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={[styles.container,{backgroundColor:theme.colors.surface}]}>
      <Navbar />
      <SearchBar />
      <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{backgroundColor:theme.colors.background}}>
       {/* category */}
      <View style={{ marginVertical:5 }}>
      <Text style={styles.title}>Categories</Text>
      <HouseCategory/>
      </View>
      {/* header */}
      <View style={{paddingVertical:5,marginVertical:5}}>
      <HomeHeader />
      </View>
      {/* cards */}
    <View style={{ paddingVertical:5,marginVertical:5}}>
    <View style={[styles.header]}>
        <Text style={styles.title}>Popular Nearest You</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
       <NearstHouse/>
    </View>
      <View>
      <View style={[styles.header]}>
        <Text style={styles.title}>Recommend For You</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <RecommendHouse />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
