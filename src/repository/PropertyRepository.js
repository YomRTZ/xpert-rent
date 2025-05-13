import PropertyService from '../services/PropertyServices';
// add home
const addProperty = async (formData) => {
  const payload = {
    home_type: formData.home_type,
    city: formData.city,
    subcity: formData.subcity,
    landmark: formData.landmark,
    street: formData.street,
    house_number: formData.house_number,
    price: parseFloat(formData.price),
    descriptions: formData.descriptions,
    bedrooms: parseInt(formData.bedrooms),
    bathrooms: parseInt(formData.bathrooms),
    square_fit: parseInt(formData.square_fit),
    images: [formData.image1]
  };
  console.log("payload",payload);
  return await PropertyService.addProperty(payload);
};
// get home(all)
const getProperty = async () => {
    return await PropertyService.getProperty();
  };
// get home by id 
//  update home
//  delate home 
export default {addProperty,getProperty};
