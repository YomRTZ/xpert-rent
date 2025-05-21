import React,{useRef} from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import Avatar from '../components/Avater';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import BottomSheet from '../components/BottomSheet';
import OwnerPage from "../modals/OwnerPage"
const Navbar = () => {
  const {theme}=useTheme();
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical:16,
      backgroundColor:theme.colors.surface
    },
    leftContainer: {
      flexDirection: 'column',
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 15,
    },
  });
  return (
   <View style={styles.container}>
    <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
      <View style={styles.leftContainer}>
      <Avatar name="chimsa" role="owner"/>
      </View>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
      <TouchableOpacity onPress={()=>refRBSheet.current.open()}>
        <MaterialIcons name="manage-accounts"  size={30} color={theme.colors.iconColor} style={styles.icon} />
      </TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color={theme.colors.iconColor} style={styles.icon} />
      </View>
      <BottomSheet ref={refRBSheet} height={350}>
        <OwnerPage refRBSheet={refRBSheet}/>
      </BottomSheet>
   </View>
  );
};
export default Navbar;


