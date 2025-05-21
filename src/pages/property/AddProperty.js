import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  Image,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import PropertyRepository from '../../repository/PropertyRepository';
import { Ionicons } from '@expo/vector-icons';
import HouseCategory from '../HomePage/HouseCategory';
import { useNavigation } from '@react-navigation/native';
export default function AddProperty() {
  const { theme } = useTheme();
const navigation=useNavigation();
  const [formData, setFormData] = useState({
    home_type: '',
    city: '',
    subcity: '',
    country: '',
    addressline1: '',
    addressline2: '',
    landmark: '',
    street: '',
    house_number: '',
    price: '',
    descriptions: '',
    bedrooms: '',
    bathrooms: '',
    square_fit: '',
    images: [], 
  });
  const closePage = () => {
    navigation.goBack(); 
  };
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      await PropertyRepository.addProperty(formData);
      Alert.alert('Success', 'Property added successfully');
    } catch (error) {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Permission to access media library is required!');
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      if (formData.images.length >= 10) {
        Alert.alert('Limit Reached', 'You can only add up to 10 images.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        selectionLimit: 10 - formData.images.length,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImages = result.assets.map((asset) => asset.uri);
        handleInputChange('images', [...formData.images, ...selectedImages]);
      }
    } catch (error) {
      Alert.alert('Error picking image', error.message);
    }
  };

  const removeImage = (indexToRemove) => {
    const updatedImages = formData.images.filter((_, i) => i !== indexToRemove);
    handleInputChange('images', updatedImages);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    input: {
      borderColor:theme.colors.border,
      borderRadius: theme.radius.regular,
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 12,
      backgroundColor: theme.colors.surface,
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.regular,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.radius.regular,
    },
    buttonText: {
      color:"#fff",
      fontWeight: 'bold',
    },
    title: {
      fontSize: theme.typography.fontSize.xl,
      color: theme.colors.title,
      fontWeight: 'bold',
      marginVertical: 15,
    },
    sectionTitle: {
      fontSize: theme.typography.fontSize.md,
      fontWeight: 'bold',
      marginVertical: 10,
      color: theme.colors.title,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    halfInput: {
      width: '48%',
    },
    imagePickerButton: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: theme.radius.regular,
      alignItems: 'center',
      marginTop: 10,
    },
    imagePickerText: {
      color:"#fff",
      fontWeight: 'bold',
    },
    imageThumbnail: {
      width: 100,
      height: 100,
      borderRadius: 5,
      marginRight: 10,
    },
    imageContainer: {
      position: 'relative',
      marginTop:10
    },
    removeIcon: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor:theme.colors.iconColor,
      borderRadius: 12,
      padding: 2,
      zIndex: 1,
    },
    imageScrollView: {
      flexDirection: 'row',
      marginVertical: 10,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={closePage}>
          <Ionicons name="close" size={28} color={theme.colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 50 }}>
        <Text style={styles.title}>Add Property</Text>

        <Text style={styles.sectionTitle}>Category</Text>
        <HouseCategory />

        <View style={styles.row}>
          <TextInput
            placeholder="Price"
            placeholderTextColor={theme.colors.title}
            style={[styles.input, styles.halfInput]}
            keyboardType="numeric"
            value={formData.price}
            onChangeText={(text) => handleInputChange('price', text)}
          />
          <TextInput
            placeholder="Square Feet"
            placeholderTextColor={theme.colors.title}
            style={[styles.input, styles.halfInput]}
            keyboardType="numeric"
            value={formData.square_fit}
            onChangeText={(text) => handleInputChange('square_fit', text)}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Bedrooms"
            placeholderTextColor={theme.colors.title}
            style={[styles.input, styles.halfInput]}
            keyboardType="numeric"
            value={formData.bedrooms}
            onChangeText={(text) => handleInputChange('bedrooms', text)}
          />
          <TextInput
            placeholder="Bathrooms"
            placeholderTextColor={theme.colors.title}
            style={[styles.input, styles.halfInput]}
            keyboardType="numeric"
            value={formData.bathrooms}
            onChangeText={(text) => handleInputChange('bathrooms', text)}
          />
        </View>

        <TextInput placeholder="Country" placeholderTextColor={theme.colors.title} style={styles.input} value={formData.country} onChangeText={(text) => handleInputChange('country', text)} />
        <TextInput placeholder="Address Line 1" placeholderTextColor={theme.colors.title} style={styles.input} value={formData.addressline1} onChangeText={(text) => handleInputChange('addressline1', text)} />
        <TextInput placeholder="Address Line 2" placeholderTextColor={theme.colors.title} style={styles.input} value={formData.addressline2} onChangeText={(text) => handleInputChange('addressline2', text)} />
        <TextInput placeholder="City" placeholderTextColor={theme.colors.title} style={styles.input} value={formData.city} onChangeText={(text) => handleInputChange('city', text)} />
        <TextInput placeholder="Subcity" placeholderTextColor={theme.colors.title} style={styles.input} value={formData.subcity} onChangeText={(text) => handleInputChange('subcity', text)} />
        <TextInput
          placeholder="Descriptions"
          placeholderTextColor={theme.colors.title}
          style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
          value={formData.descriptions}
          onChangeText={(text) => handleInputChange('descriptions', text)}
          multiline
          numberOfLines={5}
        />
        <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
          <Text style={styles.imagePickerText}>Pick Images (up to 10)</Text>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScrollView}>
          {formData.images.map((uri, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.removeIcon}
                onPress={() => removeImage(index)}
              >
                <Ionicons name="close" size={16} color="white" />
              </TouchableOpacity>
              <Image source={{ uri }} style={styles.imageThumbnail} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
