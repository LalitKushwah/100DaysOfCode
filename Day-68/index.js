const express = require('express');
const app = express();
const userRoute = require('./route/user');

app.use(express.json());

app.use('/api/user', userRoute);

app.listen(3000, () => {
    console.log('App listening to port 3000');
})