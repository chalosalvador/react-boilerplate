/**
 * Created by chalosalvador on 2/5/20
 */
import React from 'react';
import Auth from '../services/auth';
import authReducer from "../reducers/auth";
import {LOGIN_ACTION, LOGOUT_ACTION} from "../constants/actions";

const user = {};
export const UserContext = React.createContext();

const UserContextProvider = props => {

  /**
   * AuthAction
   * @param auth
   */
  const dispatchAuthAction = (auth) => {
    if (auth !== null) {
      dispatch({
        type: LOGIN_ACTION,
        payload: auth
      });
    } else {
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
      const isAuth = Auth.checkAuthentication();
      dispatchAuthAction(isAuth);

      document.title = isAuth ? 'logged in' : 'logged out';
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
      dispatch({
        type: 'loginUser',
        payload: response
      });
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

    dispatch({
      type: 'logoutUser',
      payload: null
    });
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
