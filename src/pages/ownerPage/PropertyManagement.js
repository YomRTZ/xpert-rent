import React from 'react';
import { ScrollView, StyleSheet,SafeAreaView,TouchableOpacity,View,Text} from 'react-native';
import Properties from '../../components/Properties';
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
const PropertyManagement = () => {
  const{theme}=useTheme();
  const navigation=useNavigation();
  const styles = StyleSheet.create({
    title: {
      fontSize: theme.typography.fontSize.xl,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.title,
      fontWeight: theme.typography.fontWeight.bold,
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:theme.colors.background,flex:1}}>
        <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingLeft:10}}><Ionicons name="arrow-back" size={35} color={theme.colors.iconColor}/></TouchableOpacity>
     <View style={{padding:10}}><Text style={styles.title}>Properties</Text></View>
      <Properties image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJ_6OsfFkmz1aEr8uBx68VnrFbeGhvd1ADA&s"/>
      <Properties image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgrEaDtRXTToMcHTC984HpjZp1j0B0XHj3w&s" />
      <Properties image="https://www.arhomes.com/wp-content/uploads/2022/11/Dawning_OptionalPool-Dusk.webp" />
      <Properties image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEJF4PVaJpqxSJ5Gdc5ZJKi8YdinNjWhF6A&s" />
      <Properties image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" />
      </SafeAreaView>
    </ScrollView>
  );
};
export default PropertyManagement;