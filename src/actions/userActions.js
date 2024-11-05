import axios from 'axios';
import { getGravatarURL } from "../utils/gravatar";


// Kullanıcıyı Redux store’a kaydetmek için SET_USER eylemi
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

// Kullanıcı giriş işlemi
export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', userData);
      const gravatarURL = getGravatarURL(userData.email);
      
      const user = {
        ...response.data,
        gravatarURL
      };
      
      dispatch({
        type: 'SET_USER',
        payload: user
      });
      
      return { success: true, token: response.data.token, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
};
