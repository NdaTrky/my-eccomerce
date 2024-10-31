// Client Actions
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });
  
  export const setRoles = (roles) => ({
    type: 'SET_ROLES',
    payload: roles,
  });
  
  export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme,
  });
  
  export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    payload: language,
  });
  
  // Thunk Action Creator to fetch roles
  import axios from 'axios';
  
  export const fetchRoles = () => {
    return async (dispatch) => {
      // API çağrısı yapın ve rollerinizi alın
      const response = await axios.get('/api/roles');
      dispatch(setRoles(response.data));
    };
  };