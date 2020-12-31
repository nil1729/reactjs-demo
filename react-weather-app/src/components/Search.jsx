import React, { useState } from 'react';

const Search = ({ searchLocation, searching }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length === 0) return setText('');
		searchLocation(text);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='search-box'>
				<div className='input-box'>
					<input
						onChange={(e) => {
							setText(e.target.value);
						}}
						value={text}
						type='text'
						placeholder='Search for cities, zip code etc.'
					/>
					<span>Type to Search</span>
				</div>
				<button disabled={searching} type='submit'>
					Search
				</button>
			</div>
		</form>
	);
};

export default Search;
