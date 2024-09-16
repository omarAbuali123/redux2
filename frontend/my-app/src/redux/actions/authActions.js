import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Login failed:', error);
  }
};
