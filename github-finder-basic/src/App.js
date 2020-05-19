import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Profile from './components/Profile';
import Search from './components/Search';
import Header from './components/Header';
import About from './components/pages/About';

export class App extends Component {

  // Set State 
  state={
    profile:{
      status: 500
    }
  }
  // Search Profile via GITHUB API
  searchProfile=(name)=>{
    axios.get(`https://api.github.com/users/${name}`)
    .then(res=>{
      this.setState({
        profile:res.data
      })
    })
    .catch(e=>{
      console.log('Not FOund');
      this.setState({
        profile:{
            status:404
          }
      })
    })
  }

  // Clear Search result
  clearSearch=()=>{
    this.setState({
      profile:{
        status: 500
      }
    })
  }

  // render the APP
  render() {
    return ( 
    <Router>
      <>   
        <Header/>
        <Route exact path="/"
          render={props => (
            <><About/></>
          )}
        />
        <Route path="/home" render={props=>(
          <><Search
          searchProfile={this.searchProfile}
          />
          <Profile
          clearSearch={this.clearSearch}
          profile={this.state.profile}
          /></>
        )}/>
        </>
      </Router>
    )
  }
}

export default App
