import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import photo from './photo.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ auths }) => {
    const history = useHistory();
    useEffect(() => {
        if (!auths.token) {
            history.push('/auth');
        }
        // eslint-disable-next-line
    }, [auths]);
    return (
        <div className="container my-auto">
            <div className="home jumbotron pt-1 pb-3 m-auto">
                <p className="lead text-center text-danger">Welcome {auths.user && auths.user.name}</p>
                <div className="container">
                    <img src={photo} alt="Secret" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    auths: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auths: state.auths
});

export default connect(mapStateToProps)(Home);
