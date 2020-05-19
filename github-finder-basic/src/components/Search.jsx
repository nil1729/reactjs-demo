import React, { Component } from 'react'

export class Search extends Component {
    state={
        profileName:''
    }
    onChange = (e)=>{
        this.setState({
            profileName:e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchProfile(this.state.profileName);
        this.setState({
            profileName:''
        })
    }
    render() {
        return (
            <>
                <div className="jumbotron jumbotron-fluid mb-2">
                <h1 className="display-4 text-center">Github Finder</h1>
                <div className="container">
                <hr className="mt-2 mb-4"/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group text-center">
                        <input 
                        value={this.state.profileName}
                        onChange={this.onChange}  
                        placeholder="Search Users..." 
                        type="text"  
                        className="form-control" 
                        id="username"
                        />
                    </div>
                    <button type="submit" className="col btn btn-primary">Search</button>
                </form>
                </div>
                </div>
            </>
        )
    }
}

export default Search
