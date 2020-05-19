import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


export class App extends Component {
  state = {
    todos:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=> this.setState({todos: res.data}));
  }
  markComplete = (id)=>{
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
  delItem = (id)=> {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(todo=> todo.id !== id)]
    }))
  }
  addTodo = (title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      title, 
      completed: false
    })
    .then(res=>this.setState({todos: [...this.state.todos, res.data]}))
    .catch(e=>console.log(e));
  }
  render() {
    return (
      <Router>
        <div>
        <h1>Todo List</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <Route exact path="/" render={props=>(
          <>
            <AddTodo
            addTodo={this.addTodo}
            />
            <Todos
            markComplete = {this.markComplete}
            todos = {this.state.todos}
            delItem = {this.delItem}
            />
          </>
        )}/>
        <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

export default App
