import React, {useContext, useEffect} from 'react'
import secretImg from './secret.png'
import AuthContext from '../../context/auths/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  const {loadUser, user} = authContext;

  useEffect(()=>{
    loadUser();
    // eslint-disable-next-line
  }, [])



  return (
      <div className="jumbotron mb-0 py-2">
        <p className="lead text-danger text-center">Welcome {user && user.name}</p>
        <p className="display-4 text-center text-primary">ReactJS Secret Page</p>
        <hr className="my-3"/>
        <p className="lead text-center">
          <img
            style={{height:'25rem'}}
            className="img-fluid"
            alt="secret"
            src={secretImg}
          />
        </p>
      </div>
  )
}

export default Home
