/**
 * Created by chalosalvador on 2/5/20
 */

import APIRequest from "./index";

const checkAuthentication = () => {
  return JSON.parse(localStorage.getItem('auth'));
};

const login = async (email, password) => {
  const authData = await APIRequest.handleRequest('/api/login', 'POST', {
    email,
    password
  });

  localStorage.setItem('auth', JSON.stringify(authData));

  return authData;
};

const logout = () => {
  localStorage.removeItem('auth');
};

const Auth = {
  checkAuthentication,
  login,
  logout
};

export default Auth;
