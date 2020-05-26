import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({user}) => {
        const {
            avatar_url,
            login
        } = user;
        return (
            <div className="card my-2" style={{width: '18rem'}}>
                <img src={avatar_url} className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <Link to={`/user/${login}`} className="btn btn-primary">More Info</Link>
                </div>
            </div>
        )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem
