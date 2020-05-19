import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        const {
            avatar_url,
            bio,
            followers,
            following,
            html_url,
            location,
            login,
            name,
            public_repos,
            public_gists
        } = this.props.profile;
        if(this.props.profile.status === 500){
            return(
                <></>
            )
        }else if(this.props.profile.status === 404){
            return(
                <>
                <div className="container mt-4">
                <div className="display-4 text-danger text-center">
                Not Found Any User
                </div>
                </div>
                </>
            )
        }
        else{
            return (
                <>
                <div className="main-body container-fluid mb-4">
                <div className="container col">
                <button 
                onClick={this.props.clearSearch}
                className="btn btn-secondary col">Clear Search</button>
                </div>
                <div className="row p-3 m-2">
                <div className="col-md-6 d-flex flex-column align-items-center text-secondary">
                    <img src={avatar_url} alt="AVATAR" className="img-fluid"/>
                    <h3>{name}</h3>
                    <h5>Location: <span className="text-dark">{location}</span> </h5>
                </div>
                <div className="col-md-6">
                <h3 className="text-success">Bio</h3>
                <hr className="my-1"/>
                <p>{bio}</p>
                <a href={html_url} className="btn btn-danger text-white">Visit Github Profile</a>
                <hr className="mt-2"/>
                <h5 className="mt-2 text-secondary">Username: <span className="text-dark">{login}</span></h5>
                </div>
                </div>
                <div className="row m-2 d-flex justify-content-center">
                <span className="m-2 badge badge-success p-2">Followers: {followers}</span>
                <span className="m-2 badge badge-primary p-2">Following: {following}</span>
                <span className="m-2 badge badge-secondary p-2">Public Repos: {public_repos}</span>
                <span className="m-2 badge badge-dark p-2">Public Gists: {public_gists}</span>
                </div>
                </div>
                </>
            )
        }
    }
}

export default Profile
