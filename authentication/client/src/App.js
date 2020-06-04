import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

// Context
import AuthState from './context/auths/AuthState';
import AlertState from './context/alerts/AlertState';

// Components 
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Register from './components/auths/Register';
import Login from './components/auths/Login';
import Alert from './components/layouts/Alert';

import PrivateRoute from './components/routing/PrivateRoute';


const App = () => {
  return (
    <AuthState>
    <AlertState>
    <Router>
      <>
        <Navbar/>
        <Alert/>
        <Switch>
          <Route
            exact
            path="/"
            component={About}
          />
          <PrivateRoute
            exact
            path="/home"
            component={Home}
          />
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
        </Switch>
      </>
    </Router>
    </AlertState>
    </AuthState>
  )
}

export default App;
