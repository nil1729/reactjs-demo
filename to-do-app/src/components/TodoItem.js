import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = ()=>{
        return {
            backgroundColor: '#f4f4f4',
            margin: '10px',
            display: 'flex',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                <p> {title} </p>
                <button onClick={this.props.delItem.bind(this, id)}>X</button>
            </div>
        )
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}
export default TodoItem
