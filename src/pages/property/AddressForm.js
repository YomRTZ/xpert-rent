import React from 'react';
import FormInput from '../../components/FormInput';

const AddressForm = () => {
  return (
    <>
      <FormInput name="country" placeholder="Country" />
      <FormInput name="addressline1" placeholder="Address Line 1" />
      <FormInput name="addressline2" placeholder="Address Line 2" />
      <FormInput name="city" placeholder="City" />
      <FormInput name="subcity" placeholder="Subcity" />
      <FormInput name="landmark" placeholder="Landmark" />
      <FormInput name="street" placeholder="Street" />
      <FormInput name="house_number" placeholder="House Number" keyboardType="numeric" />
    </>
  );
};

export default AddressForm;
