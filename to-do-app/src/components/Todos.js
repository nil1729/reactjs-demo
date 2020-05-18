import React, { Component } from 'react'
import TodoItem from './TodoItem';

export class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo)=>{
                return(
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                )
            })
        )
    }
}

export default Todos;
