//! Load Environment Variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: './config/config.env'
    });
};
const express = require('express');
const app = express();

//! GraphQL
const graphqlHTTP = require('express-graphql');
const {
    buildSchema
} = require('graphql');

//! Datebase Connection
const connectDB = require('./config/db');
connectDB(process.env.MONGO_URI);

//! Body Parser Setup
app.use(express.json());

//! Server Port Setup
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});