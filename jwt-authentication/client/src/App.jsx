import React from 'react'
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


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
            <Route exact path="/about" component={About} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/secret" component={Home} />
            <Redirect from='/' to='/about' />
          </Switch>
        </>
      </Router>
    </Provider>
  )
}

export default App
