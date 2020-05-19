import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    onChange = (e) => {this.setState({title: e.target.value})}
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }


    render() {
        return (
            <div className="addTodo">
                <form onSubmit={this.onSubmit}>
                    <input 
                        id="text-input"
                        type="text" 
                        placeholder="Add Todo"
                        value={this.state.title}
                        onChange={this.onChange}
                        />
                    <button type="submit"><i className="fas fa-plus-circle"></i></button>
                </form>
            </div>
        )
    }
}

export default AddTodo
