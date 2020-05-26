import React, {useEffect, useContext} from 'react';
import { Link} from 'react-router-dom';
import RepoItem from './RepoItem';
import Spinner from '../../layouts/Spinner';
import GithubContext from '../../../context/github/githubContext';

const  SingleUser = ({ match }) =>  {
  const githubContext = useContext(GithubContext);
  useEffect(()=>{
    githubContext.getUserRepos(match.params.username);
    githubContext.getSingleUser(match.params.username);
    // eslint-disable-next-line
  }, []);
  const {loading, user, repos} = githubContext;
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
        } = user;
        if(loading){
          return(
            <Spinner/>
          )
        }else{
    return (
      <>
      
     <div className="main-body container-fluid mb-4">
    <div className="container my-2">
      <Link to="/" className="btn back-btn">Back To Search</Link>
    </div>
    <div className="row p-3 m-2">
    <div className="col-md-6 d-flex flex-column align-items-center text-secondary">
      <div>
          <img src={avatar_url} style={{height: '250px'}} alt="AVATAR" className="img-fluid"/>
      </div>
        <h3 className="s-name">{name}</h3>
        <h5>Location <span className="text-dark">{location}</span> </h5>
    </div>
    <div className="col-md-6">
    <h3 className="text-success">Bio</h3>
    <hr className="my-1"/>
    <p>{bio}</p>
    <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn go-git-btn">Visit Github Profile</a>
    <hr className="mt-2"/>
    <h5 className="mt-2 text-secondary">Username <span className="text-dark">{login}</span></h5>
    </div>
    </div>
    <div className="row m-2 d-flex justify-content-center">
    <span className="m-2 badge badge-success p-2">Followers: {followers}</span>
    <span className="m-2 badge badge-primary p-2">Following: {following}</span>
    <span className="m-2 badge badge-secondary p-2">Public Repos: {public_repos}</span>
    <span className="m-2 badge badge-dark p-2">Public Gists: {public_gists}</span>
    </div>
    <div className="container">
      <ul className="list-group">{
          repos.map(item=>{
             return(
               <RepoItem
                  key={item.id}
                  item={item}
               />
             )
           })
         }
      </ul>
    </div>
    </div>
   
    </>
    )
        }
}

export default SingleUser;