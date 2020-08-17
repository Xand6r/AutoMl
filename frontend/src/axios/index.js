import axios from 'axios';

export default axios.create({
    baseURL: 'http://104.248.19.124:8000',
    timeout: 1000,
  });
