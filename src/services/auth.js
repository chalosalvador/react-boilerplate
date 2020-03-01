/**
 * Created by chalosalvador on 2/5/20
 */

import API from "./index";
import {translateMessage} from "../helpers/translateMessage";

const checkAuthentication = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    return JSON.parse(localStorage.getItem('auth'));
  }
};

const login = async (email, password) => {
  try {
    const response = await API.post('/api/login', {
      email,
      password
    });

    localStorage.setItem('auth', JSON.stringify(response.data));

    return response.data;
  } catch (e) {
    alert(translateMessage(e.message));
  }
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
