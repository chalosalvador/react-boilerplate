/**
 * Created by chalosalvador on 2/7/20
 */

import Auth from "./auth";

const baseURL = 'http://localhost:8000';

const handleRequest = async (endpoint, method, params = null) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const authData = Auth.checkAuthentication();
  if (authData) {
    headers['Authorization'] = `Bearer ${authData.token}`;
  }
  const requestData = {
    method,
    headers
  };

  if (params !== null) {
    requestData['body'] = JSON.stringify(params);
  }

  const response = await fetch(`${baseURL}${endpoint}`, requestData);

  console.log('response', response);
  const jsonResponse = await response.json();
  console.log('jsonResponse', jsonResponse);

  if (!response.ok) {
    throw new Error(jsonResponse.error);
  }

  return jsonResponse;
};

const APIRequest = {
  handleRequest
};

export default APIRequest;
