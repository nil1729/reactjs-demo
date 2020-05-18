import React, { Component } from 'react';
import Todos from './components/Todos';

export class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Learn ReactJS',
        completed: false
      },
      {
        id:2,
        title:'Learn NodeJS',
        completed: false
      },
      {
        id:3,
        title:'Push to Github',
        completed: false
      }   
    ]
  }
  render() {
    return (
      <div>
        <Todos
         todos = {this.state.todos}
        />
      </div>
    )
  }
}

export default App
