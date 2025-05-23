import React, { useEffect } from 'react';
import {
  View,
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
import { Formik } from 'formik';
import { propertyValidationSchema } from '../../validators/propertyValidation';
import FormInput from '../../components/FormInput';
import AddressForm from '../../pages/property/AddressForm';

export default function AddProperty() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const initialValues = {
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
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Permission to access media library is required!');
      }
    })();
  }, []);

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.radius.regular,
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
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
    imagePickerButton: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: theme.radius.regular,
      alignItems: 'center',
      marginTop: 10,
    },
    imagePickerText: { color: '#fff', fontWeight: 'bold' },
    imageThumbnail: {
      width: 100,
      height: 100,
      borderRadius: 5,
      marginRight: 10,
    },
    imageContainer: { position: 'relative', marginTop: 10 },
    removeIcon: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: theme.colors.iconColor,
      borderRadius: 12,
      padding: 2,
      zIndex: 1,
    },
    imageScrollView: { flexDirection: 'row', marginVertical: 10 },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={propertyValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await PropertyRepository.addProperty(values);
            Alert.alert('Success', 'Property added successfully');
            resetForm();
            navigation.goBack();
          } catch (error) {
            Alert.alert('Error', error.message || 'Something went wrong');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, isSubmitting, values, setFieldValue }) => {
          const pickImage = async () => {
            try {
              if (values.images.length >= 10) {
                Alert.alert('Limit Reached', 'You can only add up to 10 images.');
                return;
              }

              const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsMultipleSelection: true,
                selectionLimit: 10 - values.images.length,
                allowsEditing: true,
                quality: 1,
              });

              if (!result.canceled) {
                const selectedImages = result.assets.map((asset) => asset.uri);
                setFieldValue('images', [...values.images, ...selectedImages]);
              }
            } catch (error) {
              Alert.alert('Error picking image', error.message);
            }
          };

          const removeImage = (indexToRemove) => {
            const updatedImages = values.images.filter((_, i) => i !== indexToRemove);
            setFieldValue('images', updatedImages);
          };

          return (
            <>
              <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="close" size={28} color={theme.colors.iconColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
                  <Text style={styles.buttonText}>{isSubmitting ? 'Submitting...' : 'Save'}</Text>
                </TouchableOpacity>
              </View>

              <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 50 }}>
                <Text style={styles.title}>Add Property</Text>
                <Text style={styles.sectionTitle}>Category</Text>
                <HouseCategory />
                <FormInput name="price" placeholder="Price" keyboardType="numeric" />
                <FormInput name="square_fit" placeholder="Square Feet" keyboardType="numeric" />
                <FormInput name="bedrooms" placeholder="Bedrooms" keyboardType="numeric" />
                <FormInput name="bathrooms" placeholder="Bathrooms" keyboardType="numeric" />
                <FormInput name="descriptions" placeholder="Descriptions" multiline numberOfLines={4} />
                <AddressForm />

                <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
                  <Text style={styles.imagePickerText}>Pick Images (up to 10)</Text>
                </TouchableOpacity>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScrollView}>
                  {values.images.map((uri, index) => (
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
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}
