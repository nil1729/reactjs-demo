//! Load Environment Variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: './config/config.env'
    });
};
const express = require('express');
const app = express();
const cors = require('cors');
const isAuth = require('./middleware/isAuth');


//! make API Cross Site accessible for Development
if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
    console.log('CORS Enabled');
}

//! GraphQL
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const rootValue = require('./graphql/resolvers');

//! Datebase Connection
const connectDB = require('./config/db');
connectDB(process.env.MONGO_URI);

//! Body Parser Setup
app.use(express.json());

//! middleware Setup
app.use(isAuth);

//! GraphQL Setup
app.use('/api_v2', graphqlHTTP({
    schema,
    rootValue,
    graphiql: process.env.NODE_ENV === 'production' ? false : true
}));


//! Server Port Setup
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});