import React from 'react'
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Redux
import { Provider } from 'react-redux';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/secret" component={Home} />
          </Switch>
        </>
      </Router>
    </Provider>
  )
}

export default App
