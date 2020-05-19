import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class AddTodo extends Component {
    state = {
        title: ''
    }
    Onchange = (e) => this.setState({title: e.target.value})
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name="title" 
                        type="text"
                        placeholder="Add Todo"
                        value={this.state.title}
                        onChange={this.Onchange}
                    />
                    <input
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
