import { View, Text, StyleSheet, ScrollView,Platform,StatusBar} from "react-native";
import HomeHeader from "./HomeHeader";
import SearchBar from "../../components/SearchBar";
import Navbar from "../Navbar";
import NearstHouse from "./NearstHouse";
import HouseCategory from "./HouseCategory";
import { useTheme } from "../../context/ThemeContext";
import RecommendHouse from "./RecommendHouse";
import { useSafeAreaInsets} from "react-native-safe-area-context";
export default function Home() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:"15%",
      backgroundColor:theme.colors.background
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom:5,
    },
  });
  return (
    <>
    <View style={[styles.container]}>
    <View style={{paddingTop: insets.top ,backgroundColor:theme.colors.surface}} />
      <Navbar />
      <SearchBar />
      <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{backgroundColor:theme.colors.background}}>
      <View style={{ marginVertical:5 }}>
      <Text style={theme.typography.header(theme)}>Categories</Text>
      <HouseCategory/>
      </View>
      <View style={{paddingVertical:5,marginVertical:5}}>
      <HomeHeader />
      </View>
    <View style={{ paddingVertical:5,marginVertical:5}}>
    <View style={[styles.header]}>
        <Text style={theme.typography.header(theme)}>Popular Nearest You</Text>
        <Text style={theme.typography.viewAll(theme)}>View All</Text>
      </View>
       <NearstHouse/>
    </View>
      <View>
      <View style={[styles.header]}>
        <Text style={theme.typography.header(theme)}>Recommend For You</Text>
        <Text style={theme.typography.viewAll(theme)}>View All</Text>
      </View>
      <RecommendHouse />
      </View>
      </ScrollView>
    </View>
    </>
  );
}
