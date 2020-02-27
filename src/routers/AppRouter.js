import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Routes from '../constants/routes';

import NotFoundPage from '../pages/NotFoundPage';
import Loading from '../components/Loading';


const AsyncLogin = Loadable({
  loader: () => import( '../pages/LoginPage' ),
  loading: Loading
});

const AsyncHome = Loadable({
  loader: () => import( '../pages/HomePage' ),
  loading: Loading
});

const AsyncPrivate = Loadable({
  loader: () => import( '../pages/PrivatePage' ),
  loading: Loading
});

const AsyncAbout = Loadable({
  loader: () => import( '../pages/AboutPage' ),
  loading: Loading
});

const AppRouter = () => (
  <Switch>
    <PublicRoute exact={true} path={Routes.HOME} component={AsyncHome}/>
    <PublicRoute path={Routes.LOGIN} component={AsyncLogin}/>
    <PublicRoute path={Routes.ABOUT} component={AsyncAbout}/>

    <PrivateRoute path={Routes.PRIVATE} component={AsyncPrivate}/>

    <Route component={NotFoundPage}/>
  </Switch>
);

export default AppRouter;
