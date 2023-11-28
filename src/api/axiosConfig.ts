import axios from 'axios';

// Create an instance of Axios with custom configurations
const instance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend API URL
  timeout: 10000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // Add other headers as needed
  },
});

export default instance;