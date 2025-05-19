import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity,Text,View ,StyleSheet,Image} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useFavorites } from "../context/FavoritesContext"
export default function RecommendHouseCard({image}) {
  const { theme } = useTheme();
   const { toggleFavorite, isFavorited } = useFavorites();
   const isBookmarked = isFavorited({ image });
 const styles = StyleSheet.create({
    container: {
      marginHorizontal:10,
      marginVertical:5,
      flexDirection: "row",
      backgroundColor: theme.colors.surface,
      borderTopRightRadius: theme.radius.small,
      borderBottomRightRadius: theme.radius.small,
          },
          propertyDetails: {
            flex:1,
            padding: 10,
            justifyContent:"center",
          },
          propertyImage: {
            width: 150,
            height: 100,
            borderTopLeftRadius: theme.radius.small,
            borderBottomLeftRadius: theme.radius.small,
          },
          rating:{
            color: theme.colors.title,
            fontFamily: theme.typography.fontFamily.regular,
            fontSize: theme.typography.fontSize.sm,
            marginLeft: 5,
          },
          type:{
            color: theme.colors.title,
            fontFamily: theme.typography.fontFamily.semiBold,
            fontSize: theme.typography.fontSize.md,
          },
          propertyPrice: {
          color: theme.colors.title,
          fontFamily: theme.typography.fontFamily.regular,
          },
          ratingContainer: {
            flexDirection: "row",
          },  
          propertyAddress: {
            paddingVertical: 5,
            color: theme.colors.title,
            fontFamily: theme.typography.fontFamily.regular,
            fontSize: theme.typography.fontSize.sm,
          },
          bookmark:{
            position:"absolute",
            zIndex:999,
            right:5,
            top:5,
          }
 });
   return(
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.bookmark} onPress={() => toggleFavorite({ image })}>
               <Ionicons
                 name={isBookmarked ? "heart" : "heart-outline"}
                 size={28}
                 color={theme.colors.primary}
               />
             </TouchableOpacity>
    <Image
      source={{ uri:image}}
      style={styles.propertyImage}
    />
    <View style={styles.propertyDetails}>
    <Text style={styles.type}>Nicose Apartment</Text>
      
      <Text style={styles.propertyAddress}>AddisAbaba/Bole</Text>
      <View style={{flexDirection: "row", alignItems: "center",justifyContent:"space-between",paddingVertical: 5,}}>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.rating}>5</Text>
      </View>
      <Text style={styles.propertyPrice}>$1234/month</Text>
      </View>
    </View>
</TouchableOpacity>
   );
}