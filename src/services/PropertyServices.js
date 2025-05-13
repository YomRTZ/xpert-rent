import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/method/nova_rent_app.api.rental_home_api.add_rental_home';
const BASE_URL2 = 'http://localhost:8000/api/method/nova_rent_app.api.rental_home_api.get_rental_home';
const addProperty = async (payload) => {
  try {
    
    console.log("payload services",payload);
    console.log("BASE_URL",BASE_URL);
    const response = await axios.post(BASE_URL, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log("response",response);
    return response.data;
  } catch (err) {
    console.error('error at add property:', err);
    throw new Error(err.response?.data?.message || 'API error');
  }
};
const getProperty = async () => {
    try {
      console.log("call");
      const response = await axios.get(BASE_URL2);
      console.log("response",response);
      return response.data;
    } catch (err) {
      console.error('get property Error:', err);
      throw new Error(err.response?.data?.message || 'API error');
    }
  };
export default {addProperty,getProperty};
