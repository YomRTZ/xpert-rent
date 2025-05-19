import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity,Text,View ,StyleSheet,Image} from "react-native";
import { useTheme } from "../context/ThemeContext";
export default function TenantProfile({image,name,address,price}) {
  const { theme } = useTheme();
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
            width:100,
            height:100,
            borderRadius:50
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
          propertyAddress: {
            paddingVertical: 5,
            color: theme.colors.title,
            fontFamily: theme.typography.fontFamily.regular,
            fontSize: theme.typography.fontSize.sm,
          },
 });
   return(
    <TouchableOpacity style={styles.container}>

    <Image
      source={{ uri:image}}
      style={styles.propertyImage}
    />
    <View style={styles.propertyDetails}>
    <Text style={styles.type}>{name}</Text>
      <Text style={styles.propertyAddress}>{address}</Text>
      <View style={{flexDirection: "row", alignItems: "center",justifyContent:"space-between",paddingVertical: 5,}}>
      <Text style={styles.propertyPrice}>{price}</Text>
      </View>
    </View>
</TouchableOpacity>
   );
}