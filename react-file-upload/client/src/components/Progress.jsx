import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ progressPercentage }) => {
	return (
		<>
			<div className='progress my-2'>
				<div
					className='progress-bar progress-bar-striped bg-success'
					role='progressbar'
					style={{ width: `${progressPercentage}%` }}>
					{`${progressPercentage} %`}
				</div>
			</div>
		</>
	);
};

Progress.propTypes = {
	progressPercentage: PropTypes.number.isRequired,
};

export default Progress;
