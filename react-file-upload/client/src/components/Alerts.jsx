import React from 'react';
import PropTypes from 'prop-types';

const Alerts = ({ alerts, removeAlert }) => {
	return (
		<>
			{Object.keys(alerts).length !== 0 ? (
				<div
					className={`alert alert-${alerts.type} alert-dismissible fade show`}
					role='alert'>
					<p className='lead mb-0'>{alerts.msg}</p>
					<button onClick={removeAlert} type='button' className='close'>
						<span>&times;</span>
					</button>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

Alerts.propTypes = {
	alerts: PropTypes.object.isRequired,
	removeAlert: PropTypes.func.isRequired,
};

export default Alerts;
