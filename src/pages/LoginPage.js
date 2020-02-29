import React from 'react';
import {UserContext} from "../contexts/UserContextProvider";


const LoginPage = () => {
  const user = React.useContext(UserContext);

  return (
    <div>
      <button onClick={() => user.handleLogin('admin@test.com', 'toptal')}>login</button>
    </div>
  );
};

export default LoginPage;
