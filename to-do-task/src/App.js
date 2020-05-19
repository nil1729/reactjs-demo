import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

export class App extends Component {
  // State 
  state={
    todos:[]
  }
  // Load data From Local Storage
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    if(todos){
        this.setState({
        todos: todos
      })
    }    
  }
  // Mark as Complete
  markComplete = (id)=> {
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
    this.saveData(this.state.todos);
  }

  // Delete a Item
  delItem=(id)=>{
    let newTodos = [...this.state.todos.filter(todo => todo.id!== id)];
    this.setState({
      todos: newTodos
    })
    this.saveData(newTodos);
  }

  // Add a new TODO
  addTodo=(title)=>{
    let data = this.loadData();
    const newItem = 
    {
        title: title,
        completed: false,
        id: uuidv4()
    }
    data.unshift(newItem);
    this.setState({
      todos: data
    });
    this.saveData(data);
  }


  // Load Data from State 
  loadData = ()=> {
    const data = this.state.todos;
    return data;
  }
  // Save the Data to Local Storage
  saveData = (data)=>{
    localStorage.setItem('TODOS', JSON.stringify(data));
  }
  
  // clear The Local Storage
  clear = ()=>{
    localStorage.clear();
    this.setState({
      todos:[]
    });
  }


  render() {
    return (
      <>
        <div className="header">
          <h1>todo list app</h1>
        </div>
        <div className="main-body">
          <Todos
            clear={this.clear}
            delItem={this.delItem}
            markComplete={this.markComplete}
            todos={this.state.todos}
          />
          <AddTodo
            addTodo={this.addTodo}
          />
        </div>
      </>
    )
  }
}

export default App
