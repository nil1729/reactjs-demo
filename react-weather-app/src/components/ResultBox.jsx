import React, { useState, useEffect } from 'react';

const ResultBox = ({ weatherStatus, error, loading }) => {
	const [icon, setIcon] = useState('unknown');
	const [weather, setWeather] = useState(null);
	const [temperatureUnit, setTemperatureUnit] = useState('C');
	const [temperature, setTemperature] = useState(null);

	useEffect(() => {
		if (error && !loading) {
			setWeather(null);
		} else if (weatherStatus && !loading) {
			setIcon(weatherStatus.icon);
			setWeather(weatherStatus);
			setTemperature(weatherStatus.temperature);
			setTemperatureUnit('C');
		} else if (loading) {
			setIcon('unknown');
		}
	}, [weatherStatus, error, loading]);

	const changeTemperatureUnit = () => {
		if (temperatureUnit === 'C') {
			setTemperature(Math.floor((temperature * 9) / 5 + 32));
			setTemperatureUnit('F');
		} else {
			setTemperature(weatherStatus.temperature);
			setTemperatureUnit('C');
		}
	};

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
					<h3 onClick={changeTemperatureUnit}>
						{weather ? temperature : '-'} °{temperatureUnit}
					</h3>
					<h4>{weather ? weather.description : '-'} </h4>
					<h5>{weather ? `${weather.place}, ${weather.country}` : '-'} </h5>
				</div>
			)}
		</div>
	);
};

export default ResultBox;
