import { AxiosResponse } from 'axios';
import { UserData } from '../Types/SystemComponentsTypes/UserData';
import { ServerUserData } from '../Types/SystemComponentsTypes/UserRegistrationData';
import axios from './axiosConfig'; // Import the Axios instance



// Define functions for making API requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  } else {
    // Remove the Authorization header if the token is null
    delete axios.defaults.headers.common['Authorization'];
  }
  console.log('Authentication Token:', axios.defaults.headers.common['Authorization']);
};

console.log('Request Headers:', axios.defaults.headers);

export const getAllUserData = () => {
  return axios.get('/user/all'); // Example endpoint for getting all user data
};


export const getUserById = async (id: number): Promise<AxiosResponse<any, any>> => {
  try {
    const response = await axios.get(`/user/${id}`);
    return response;
  } catch (error: any) {
    console.error('Error fetching user data:', error.response?.data || error.message);
    throw error; // rethrow the error to propagate it to the caller
  }
};

export const updateUserProfile = (id: number, serverUserData: ServerUserData) => {
  return axios.put(`/user/${id}`, serverUserData);
};

export const loginUser = (credentials: any) => {
  return axios.post('user/login', credentials);
};

export const registerUser = (userData: UserData) => {
  return axios.post('user/registration', userData);
};