const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json({extended: true}));

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/api/auths', require('./routes/auths'));
app.use('/api/users', require('./routes/users'));
app.use('/api/secret', require('./routes/secret'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});