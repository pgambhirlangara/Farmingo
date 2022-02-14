const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');

const URL = 'mongodb+srv://farmingo_admin:Farmingo%40123@farmingo.rsu0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected...');
})

// Middleware
app.use(express.json());

app.get('/', (request, response) => {
    console.log('Requested home page');
    response.send('HOME PAGE');
})

// middleware
app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));


