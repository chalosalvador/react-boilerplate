/**
 * Created by chalosalvador on 2/5/20
 */
import React from 'react';
import Auth from '../services/auth';
import authReducer from "../reducers/auth";
import {LOGIN_ACTION, LOGOUT_ACTION} from "../constants/actions";
import API from "../services";

const user = {};
export const UserContext = React.createContext();

const UserContextProvider = props => {

  /**
   * AuthAction
   * @param auth
   */
  const dispatchAuthAction = (auth) => {
    if (!!auth) {
      API.defaults.headers.common['Authorization'] = 'Bearer ' + auth.token; // TODO is it the best place to set this?
      document.title = 'logged in';

      dispatch({
        type: LOGIN_ACTION,
        payload: auth
      });
    } else {
      API.defaults.headers.common['Authorization'] = null; // TODO is it the best place to set this?
      document.title = 'logged out';

      dispatch({
        type: LOGOUT_ACTION,
        payload: null
      });
    }
  };

  /**
   * Sync auth status across browser tabs/windows
   */
  window.addEventListener('storage', (e) => {
    console.log(`Key Changed: ${e.key}`);
    console.log(`New Value: ${e.newValue}`);
    if (e.key === 'auth') {
      const auth = JSON.parse(e.newValue);
      dispatchAuthAction(auth);
    }
  });

  /**
   * Check Authentication
   */
  const [auth, dispatch] = React.useReducer(authReducer, user);
  React.useEffect(() => {
    const checkAuthentication = () => {
      const auth = Auth.checkAuthentication();
      console.log('isAuth', auth);
      dispatchAuthAction(auth);
    };

    checkAuthentication();
  }, []);

  /**
   * Login
   * @param email
   * @param password
   * @returns {Promise<void>}
   */
  const login = async (email, password) => {
    try {
      const response = await Auth.login(email, password);
      console.log('token', response);
      dispatchAuthAction(response);
    } catch (e) {
      alert(e.message);
    }
  };

  /**
   * Logout
   * @returns {Promise<void>}
   */
  const logout = async () => {
    Auth.logout();

    dispatchAuthAction(null);
  };

  return (
    <UserContext.Provider
      value={{
        ...auth,
        handleLogin: (email, password) => login(email, password),
        handleLogout: logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
