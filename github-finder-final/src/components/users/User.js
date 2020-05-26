import React ,{useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';


const User = () => {
    const githubContext = useContext(GithubContext);
    const {loading , users} = githubContext;
        return (
            <div style={userStyle()}>
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

const userStyle = ()=>{
    return {
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '1em'
    }
}

export default User
