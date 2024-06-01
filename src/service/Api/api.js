import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Set your base URL for API requests
  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json', // Set default headers (optional)
  },
});

export default instance;
