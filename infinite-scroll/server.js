if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const fetch = require('node-fetch');
const express = require('express');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const app = express();

global.fetch = fetch;

const unsplash = new Unsplash({
	accessKey: process.env.ACCESS_KEY,
});

app.get('/api/photos', (req, res) => {
	unsplash.search
		.photos('technology', req.query.start, 30)
		.then(toJson)
		.then(json => {
			res.json(json);
		});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
