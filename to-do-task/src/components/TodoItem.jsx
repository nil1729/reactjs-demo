import React, { Component } from 'react'

export class TodoItem extends Component {
    taskStlyle = ()=>{
        return{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    checkStyle = ()=>{
        return {
            color: this.props.todo.completed ? '#b2d42a' : 'grey'
        }
    }
    render() {
        const {id,title} = this.props.todo;
        return (
            <div className="todo-item">
                <span style={this.checkStyle()} onClick={this.props.markComplete.bind(this, id)}  className="check"><i className="far fa-check-circle"></i></span>
                <p style={this.taskStlyle()}>{title}</p>
                <span onClick={this.props.delItem.bind(this, id)} className="delete"><i className="far fa-trash-alt"></i></span>
            </div>
        )
    }
}
export default TodoItem
