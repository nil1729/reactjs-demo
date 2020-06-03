const fetch = require('node-fetch');
const config = require('config');
const express = require('express');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const app = express();

global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: config.get('AccessKey') });


app.get('/api/photos', (req, res) => {
    unsplash.search.photos("technology", req.query.start, 30)
    .then(toJson)
    .then(json => {        
        res.json(json);
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});