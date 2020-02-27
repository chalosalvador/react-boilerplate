import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { translateMessage } from '../helpers/translateMessage';
import Routes  from '../constants/routes';
import {UserContext} from "../contexts/UserContextProvider";

const PrivateRoute = ( {
  component: Component,
  redirectTo,
  ...rest
} ) => {
  const user = React.useContext(UserContext);

  const getComponent = ( props ) => {
    if( user.isAuthenticated ) {
      return <Component { ...props } />;
    } else {
      // message.info( translateMessage( 'auth/requires-login' ), 5 );
      alert(translateMessage( 'auth/requires-login' ));
      return (
        <Redirect to={ {
          pathname: redirectTo || Routes.LOGIN,
          state: { from: props.location }
        } } />
      );
    }
  };

  return <Route { ...rest } component={ getComponent } />;
};

export default PrivateRoute;
