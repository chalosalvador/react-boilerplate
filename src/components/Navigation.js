/**
 * Created by chalosalvador on 2/7/20
 */
import React from "react";
import {UserContext} from "../contexts/UserContextProvider";

const Navigation = (props) => {

  const user = React.useContext(UserContext);
  return (
    <ul>
      {
        user.isAuthenticated
          ? <li><button onClick={user.handleLogout}>logout</button></li>
          : <li><button onClick={()=>user.handleLogin('admin@test.com', 'toptal')}>login</button></li>
      }
    </ul>
  );
};

export default Navigation;
