const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json({
    extended: true
}));

// app.get('/', (req, res) => {
//     res.status(200).json({
//         msg: 'Welcome'
//     });
// });

app.use('/api/auths', require('./routes/auths'));
app.use('/api/users', require('./routes/users'));
app.use('/api/secret', require('./routes/secret'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});