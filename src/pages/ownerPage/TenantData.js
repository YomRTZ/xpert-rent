import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet,TouchableOpacity, View,Text} from 'react-native';
import TenantProfile from '../../components/TenantProfile';
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from '../../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets} from "react-native-safe-area-context";
const TenantData = () => {
    const{theme}=useTheme();
    const navigation=useNavigation();
    const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({});
  return (
    <>
  <View style={{paddingTop: insets.top ,backgroundColor:theme.colors.background}} />
 <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:theme.colors.background,flex:1}}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:10}}><Ionicons name="arrow-back" size={35} color={theme.colors.iconColor}/></TouchableOpacity>
    <View style={{padding:10}}><Text style={theme.typography.title(theme)}>Tenant Profile</Text></View>
      <TenantProfile image="https://media.istockphoto.com/id/1382355495/vector/avatar-of-the-call-center-operator-girl-with-headphones-and-a-laptop.jpg?s=612x612&w=0&k=20&c=TZIoT9OvWdIa9rkk78VusuzFaUiH6AIax5dD0g5e484=" name="Yomi" address="AddisAbaba/Bole" price="$1234/month"/>
      <TenantProfile image="https://t4.ftcdn.net/jpg/03/77/42/87/240_F_377428781_orWZB5SVXvOMkOV6tjJ0FYM3JgRf3dAi.jpg"name="Chimsa" address="AddisAbaba/Bole" price="$50000/month" />
      <TenantProfile image="https://t3.ftcdn.net/jpg/05/90/59/88/240_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg"name="Mikael" address="AddisAbaba/Bole" price="$24574/month" />
      <TenantProfile image="https://media.istockphoto.com/id/2160416442/vector/modern-girl-with-high-bun-hairstyle-vector-illustration.jpg?s=612x612&w=0&k=20&c=DrSRIQ8qmU0RchHsBHQSQ5a79Yo5mFRMjqjfPKexdbY="name="Marvel" address="AddisAbaba/Bole" price="$34534/month"/>
    </ScrollView>
    </>
  );
};
export default TenantData;