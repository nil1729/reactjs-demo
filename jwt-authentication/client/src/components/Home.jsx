import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import photo from './photo.jpg';
import { connect } from 'react-redux';


const Home = ({ auths }) => {
    const history = useHistory();
    useEffect(() => {
        if (!auths.token) {
            history.push('/auth');
        }
    }, [auths]);
    return (
        <div className="container mb-0">
            <div className="jumbotron pt-1 pb-3 mb-0">
                <p className="lead text-center text-danger">Welcome {auths.user && auths.user.name}</p>
                <div className="container">
                    <img src={photo} alt="Secret" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auths: state.auths
});

export default connect(mapStateToProps)(Home);