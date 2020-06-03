const mongoose = require('mongoose');
const config = require('config');

module.exports = async ()=> {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB Connected');
    } catch (e) {
        console.log(e.message);
        console.log('Refused to Connect');
    }
};