import React from 'react'
import { connect } from 'react-redux';
import { removeAlert } from '../actions/AuthActions';
import PropTypes from 'prop-types';

const Alert = ({ alerts, removeAlert }) => {
    return (
        !alerts ? (<></>) : (
            alerts.map(e => (
                <div key={Math.ceil(Math.random() * 5 + 5)} className="mt-2 alert alert-dismissible alert-primary">
                    <button onClick={() => { removeAlert() }} type="button" className="close" data-dismiss="alert">&times;</button>
                    <p className="lead mb-0">{e.message}</p>
                </div>
            ))
        )
    )
}

Alert.propTypes = {
    removeAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.auths.errors
});

export default connect(mapStateToProps, { removeAlert })(Alert);
