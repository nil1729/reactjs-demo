import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo)=>{
                return(
                        <TodoItem
                            markComplete={this.props.markComplete}
                            key={todo.id}
                            todo={todo}
                            delItem = {this.props.delItem}
                        />
                )
            })
        )
    }
}

// Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}


export default Todos;
