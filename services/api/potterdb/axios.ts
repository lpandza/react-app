import Axios from 'axios';
import { apiEndpoints } from './apiEndpoints';

export const axios = Axios.create({
  baseURL: apiEndpoints.BASE_URL,
});
