import React  from 'react';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import SingleUser from './components/pages/singleUser/SingleUser';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App  = () => {
    return (
      <GithubState>
      <AlertState>
      <Router>
      <>
        <Navbar
          title="Github Finder"
          icon="fab fa-github"
        />
        <Alert/>
        <Switch>
          <Route 
            exact
            path="/"
            component={Home}
          />
          <Route 
            exact 
            path="/about" 
            component={About}
          />
          <Route 
            exact 
            path="/user/:username"
            component={SingleUser}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </>
      </Router>
      </AlertState>
      </GithubState>
    )
}

export default App;
