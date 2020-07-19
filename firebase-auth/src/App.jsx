import React, { useEffect, useContext } from 'react'
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import PrivateRoute from './components/routes/PrivateRoute';
import AppContext from './context/appContext';
const App = () => {
  const appContext = useContext(AppContext);
  const { loadUser } = appContext;
  useEffect(() => {
    M.AutoInit();
    loadUser();
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </>
  )
}

export default App
