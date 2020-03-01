import React from 'react';
import './styles/App.css';
import Navigation from "./components/Navigation";
import UserContextProvider from "./contexts/UserContextProvider";
import AppRouter from "./routers/AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>

        <Navigation/>

        <AppRouter/>

      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
