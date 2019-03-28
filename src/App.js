import React, { Component } from 'react';
import Aux from './hoc/Auxiliary'
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Landing from './components/Layouts/Landing/Landing';
import Home from './components/Layouts/Home/Home';
import Login from './components/Layouts/Login/Login';
import Register from './components/Layouts/Register/Register';

import * as ROUTES from './constants/routes/Routes';

class App extends Component {
  render() {
    return (
        <Router>
          <Aux>
            <PrivateRoute
              exact path={ROUTES.HOME}
              component={Home}>
            </PrivateRoute>
            <Route
              exact path={ROUTES.LANDING}
              render={()=><Landing />}>
            </Route>
            <Route
              exact path={ROUTES.REGISTER}
              render={()=><Register />}>
            </Route>
            <Route
              exact path={ROUTES.LOGIN}
              render={()=><Login />}>
            </Route>
          </Aux>
        </Router>
    );
  }
}

export default App;
