import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Routes from '../constants/routes';
import {UserContext} from "../contexts/UserContextProvider";
import { useHistory } from "react-router-dom";

const PublicRoute = ( {
  component: Component,
  ...rest
} ) => {
  const user = React.useContext(UserContext);
  let history = useHistory();

  return <Route {...rest} component={(props) => (
    user.isAuthenticated
    &&
    (
      history.location.pathname === Routes.LOGIN
      // history.location.pathname === LOGIN_TEACHER ||
      // history.location.pathname === REGISTRATION_TEACHER ||
      // history.location.pathname === REGISTRATION_STUDENT
    )
      ? <Redirect to={(history.location.state && history.location.state.from.pathname) || Routes.HOME}/>
      : <Component {...props} />
  )}
  />
};

export default PublicRoute;
