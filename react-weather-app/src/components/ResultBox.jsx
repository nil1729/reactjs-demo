import React, { useState, useEffect } from 'react';

const ResultBox = ({ weatherStatus, error, loading }) => {
	const [icon, setIcon] = useState('unknown');
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		if (error && !loading) {
			setWeather(null);
		} else if (weatherStatus && !loading) {
			setIcon(weatherStatus.icon);
			setWeather(weatherStatus);
		} else if (loading) {
			setIcon('unknown');
		}
	}, [weatherStatus, error, loading]);

	return (
		<div className='result-box'>
			{error ? <div className='alert-box'>{error}</div> : ''}
			<div className='icon-box'>
				<img src={require(`../icons/${icon}.png`).default} alt='' />
			</div>
			{loading ? (
				<div className='spinner'>
					<div></div>
					<div></div>
				</div>
			) : (
				<div className='weather-box'>
					<h3>{weather ? weather.temperature : '-'} °C</h3>
					<h4>{weather ? weather.description : '-'} </h4>
					<h5>{weather ? `${weather.place}, ${weather.country}` : '-'} </h5>
				</div>
			)}
		</div>
	);
};

export default ResultBox;
