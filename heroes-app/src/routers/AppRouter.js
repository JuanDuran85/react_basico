import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';
import { PriveteRoute } from "./PriveteRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
          <div>
            <Switch>
              <PublicRoute exact path="/login" component={LoginScreen} isAutenticated={user.logged}/>
              <PriveteRoute path="/" component={DashboardRoutes} isAutenticated={user.logged}/>
            </Switch>
          </div>
        </Router>
      ); 
}
