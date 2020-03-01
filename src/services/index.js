/**
 * Created by chalosalvador on 2/7/20
 */

import axios from 'axios';

const baseURL = 'http://localhost:8000';

const API = axios.create({
  baseURL
});

export default API;
