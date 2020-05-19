import React, { Component } from 'react'
import TodoItem from './TodoItem';


export class Todos extends Component {
    render() {
        const Month=["January","February","March","April","May","June","July","August","September","October","November","December"]
        const d = new Date();
        const y = d.getFullYear();
        const m = d.getMonth();
        const day = d.getDate()
        return (
            <>
                <div className="todos">
                    <div className="time">
                        <span onClick={this.props.clear}><i className="fas fa-sync"></i></span>
                        <p>{`${day} ${Month[m]} ${y}`}</p>
                    </div>
                    <div className="container">
                        {this.props.todos.map((todo)=>{
                            return (
                                <TodoItem
                                delItem={this.props.delItem}
                                markComplete={this.props.markComplete}
                                key={todo.id} 
                                todo={todo}
                                />
                            )
                        })}
                    </div>
                </div>            
            </>
        )
    }
}

export default Todos
