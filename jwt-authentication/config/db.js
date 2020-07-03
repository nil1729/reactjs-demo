const mongoose = require('mongoose');

module.exports = async (key) => {
    try {
        await mongoose.connect(
            key, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });
        console.log('MongoDB Connection established');
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};