import { api } from '@/api';
import { setToken, clearToken } from '../utils/tokenManager'; // Token yönetimi için utils
import { getGravatarURL } from "../utils/gravatar";

// Kullanıcıyı Redux store'a kaydetmek için SET_USER eylemi
export const setUser  = (user) => ({
  type: 'SET_USER',
  payload: user,
});

// Kullanıcı giriş işlemi
export const loginUser  = (userData) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/login', userData);
      const gravatarURL = getGravatarURL(userData.email);
      
      const user = {
        ...response.data,
        gravatarURL
      };
      
      dispatch(setUser (user));
      
      // Token'ı yönetmek için setToken fonksiyonunu kullan
      setToken(response.data.token); // Token'ı localStorage ve Axios header'ına ekle
      
      return { success: true, token: response.data.token, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
};

// Kullanıcı çıkış işlemi
export const logoutUser  = () => {
  return (dispatch) => {
    clearToken(); // Token'ı localStorage'dan ve Axios header'ından kaldır
    dispatch({ type: 'LOGOUT_USER' }); // Kullanıcı bilgilerini Redux store'dan temizle
  };
};

// Token doğrulama işlemi
export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        api.defaults.headers.common['Authorization'] = token; // Token'ı Axios header'ına ekle
        const response = await api.get('/verify');
        
        const user = {
          ...response.data,
          gravatarURL: getGravatarURL(response.data.email)
        };
        
        dispatch(setUser (user)); // Kullanıcıyı Redux store'a kaydet
        
        // Token'ı yenile
        if (response.data.token) {
          setToken(response.data.token); // Token'ı localStorage ve Axios header'ına ekle
        }
        
        return true;
      } catch (error) {
        clearToken(); // Token doğrulanamadı, temizle
        return false;
      }
    }
    return false;
  };
};