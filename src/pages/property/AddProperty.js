import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropertyRepository from '../../repository/PropertyRepository';
import { useNavigation } from '@react-navigation/native';
import { Ionicons} from "@expo/vector-icons";
import { useTheme } from '../../context/ThemeContext';
export default function AddProperty() {
  const navigation =useNavigation();
  const {theme}=useTheme();
  const [formData, setFormData] = useState({
    homeType: '',
    city: '',
    subcity: '',
    landmark: '',
    street: '',
    house_number: '',
    price: '',
    descriptions: '',
    bedrooms: '',
    bathrooms: '',
    square_fit: '',
    image1: ''
  });
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  
  const handleSubmit = async () => {
    try {
      console.log("data",formData);
       await PropertyRepository.addProperty(formData);
      Alert.alert('Success', `Home added: ${result.name}`);
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };
  
  return (
   <SafeAreaView>
    <View style={{margin:10}}><TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name="arrow-back" size={40} color={theme.colors.primary}/></TouchableOpacity></View> 
    <View style={styles.container}>
<ScrollView contentContainerStyle={styles.container}>
<TextInput placeholder="Image URL 1" style={styles.input} value={formData.image1} onChangeText={(text) => handleInputChange('image1', text)} />
<TextInput placeholder="Home Type" style={styles.input} value={formData.home_type} onChangeText={(text) => handleInputChange('home_type', text)} />
<TextInput placeholder="City" style={styles.input} value={formData.city} onChangeText={(text) => handleInputChange('city', text)} />
<TextInput placeholder="Subcity" style={styles.input} value={formData.subcity} onChangeText={(text) => handleInputChange('subcity', text)} />
<TextInput placeholder="Landmark" style={styles.input} value={formData.landmark} onChangeText={(text) => handleInputChange('landmark', text)} />
<TextInput placeholder="Street" style={styles.input} value={formData.street} onChangeText={(text) => handleInputChange('street', text)} />
<TextInput placeholder="House Number" style={styles.input} value={formData.house_number} onChangeText={(text) => handleInputChange('house_number', text)} />
<TextInput placeholder="Price" style={styles.input} keyboardType="numeric" value={formData.price} onChangeText={(text) => handleInputChange('price', text)} />
<TextInput placeholder="Descriptions" style={styles.input} value={formData.descriptions} onChangeText={(text) => handleInputChange('descriptions', text)} />
<TextInput placeholder="Bedrooms" style={styles.input} keyboardType="numeric" value={formData.bedrooms} onChangeText={(text) => handleInputChange('bedrooms', text)} />
<TextInput placeholder="Bathrooms" style={styles.input} keyboardType="numeric" value={formData.bathrooms} onChangeText={(text) => handleInputChange('bathrooms', text)} />
<TextInput placeholder="Square Fit" style={styles.input} keyboardType="numeric" value={formData.square_fit} onChangeText={(text) => handleInputChange('square_fit', text)} />
<View style={styles.button}>
        <Button title="Submit Rental Home"onPress={handleSubmit}/>
      </View>
    </ScrollView>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333'
  }
});
