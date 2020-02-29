/**
 * Created by chalosalvador on 2/7/20
 */
import React from "react";
import {UserContext} from "../contexts/UserContextProvider";
import {Link} from "react-router-dom";
import Routes from '../constants/routes';

const Navigation = (props) => {

  const user = React.useContext(UserContext);
  return (
    <ul>
      <li><Link to={Routes.HOME}>Inicio</Link></li>
      <li><Link to={Routes.PRIVATE}>Página privada</Link></li>
      {
        user.isAuthenticated
          ? <li>
            <button onClick={user.handleLogout}>logout</button>
          </li>
          : <li><Link to={Routes.LOGIN}>Login</Link></li>
      }
    </ul>
  );
};

export default Navigation;
