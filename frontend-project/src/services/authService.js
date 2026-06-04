import apiClient from '../api/apiClient';

const authService = {
  signUp: async (userData) => {
    const payload = {
      userName: userData.username, // mapping to backend field name
      password: userData.password,
      confirmPassword: userData.confirmPassword
    };
    const response = await apiClient.post('/auth/signUp', payload);
    return response.data;
  },

  signIn: async (credentials) => {
    const payload = {
      userName: credentials.username, // mapping to backend field name
      password: credentials.password
    };
    const response = await apiClient.post('/auth/signIn', payload);
    return response.data;
  }
};

export default authService;
