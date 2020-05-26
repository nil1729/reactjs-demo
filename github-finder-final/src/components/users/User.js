import React ,{useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';


const User = () => {
    const githubContext = useContext(GithubContext);
    const {loading , users} = githubContext;
        return (
            <div className="searchResult">
                {loading && <Spinner/>}
                {
                    users.map(user=>{
                        return(
                        <UserItem
                            key={user.id}
                            user={user}
                        />
                        )
                    })
                }
            </div>
        )
}

export default User
