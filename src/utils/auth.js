import { api } from '../api';
import { setUser, logoutUser } from '../actions/userActions';
import { setToken, clearToken, getToken } from './tokenManager';

export const checkAndVerifyToken = async (dispatch) => {
  const token = getToken();
  
  if (token) {
    try {
      const response = await api.get('/verify');
      dispatch(setUser(response.data));
      if (response.data.token) {
        setToken(response.data.token);
      }
    } catch (error) {
      dispatch(logoutUser());
      clearToken();
    }
  }
};