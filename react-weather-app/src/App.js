import React, { useEffect, useState } from 'react';

import Search from './components/Search';
import ResultBox from './components/ResultBox';

const App = () => {
	const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
	const MAPQUEST_API = `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API_KEY}`;

	const [position, setPosition] = useState(null);

	const [loading, setLoading] = useState(true);

	const [searching, setSearching] = useState(null);

	const [error, setError] = useState(null);

	const [weatherStatus, setWeatherStatus] = useState(null);

	const getWeather = async (loc) => {
		try {
			const res = await fetch(
				`${WEATHER_API}&lat=${loc.latitude}&lon=${loc.longitude}`
			);
			const data = await res.json();
			setWeatherStatus({
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				place: data.name || (position && position.place),
				country: data.sys.country || (position && position.country),
				temperature: Math.floor(data.main.temp - 273.15),
			});
		} catch (error) {
			showError(error);
		}
		setLoading(false);
		setSearching(false);
	};

	const setCurrentPosition = async (position) => {
		const loc = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		};
		setPosition(loc);
		setLoading(true);
		await getWeather(loc);
	};

	const searchLocation = async (text) => {
		try {
			setSearching(true);
			setLoading(true);
			const res = await fetch(`${MAPQUEST_API}&location=${text}`);
			const data = await res.json();
			if (
				data.results.length === 0 ||
				data.results[0].locations[0].length === 0
			) {
				throw new Error('Address not found. Please try again');
			}
			const loc = {
				latitude: data.results[0].locations[0].latLng.lat,
				longitude: data.results[0].locations[0].latLng.lng,
			};

			setPosition({
				...loc,
				place:
					data.results[0].locations[0].adminArea5 ||
					data.results[0].locations[0].adminArea4,
				country: data.results[0].locations[0].adminArea1,
			});
			await getWeather(loc);
		} catch (err) {
			showError(err);
		}
	};

	const showError = (error) => {
		setError(error.message);
		if (error.name === 'GeolocationPositionError' && error.code === 2) {
			setError('Network Error. Internet connection broken');
		}
	};

	const locateCurrentPosition = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(setCurrentPosition, showError);
		} else {
			showError("Browser Don't support Geolocation");
		}
	};

	useEffect(() => {
		locateCurrentPosition();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h1 className='header'>Weather App</h1>
			<Search searching={searching} searchLocation={searchLocation} />
			<ResultBox
				weatherStatus={weatherStatus}
				error={error}
				loading={loading}
			/>
		</>
	);
};

export default App;
