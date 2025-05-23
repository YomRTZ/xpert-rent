import * as Yup from 'yup';

export const propertyValidationSchema = Yup.object().shape({
  price: Yup.number().required('Price is required').positive('Must be a positive number'),
  square_fit: Yup.number().required('Square feet is required').positive(),
  bedrooms: Yup.number().required('Bedrooms are required').integer().min(0),
  bathrooms: Yup.number().required('Bathrooms are required').integer().min(0),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  subcity: Yup.string().required('Subcity is required'),
  addressline1: Yup.string().required('Address Line 1 is required'),
  descriptions: Yup.string().required('Description is required').min(10, 'Too short'),
});
