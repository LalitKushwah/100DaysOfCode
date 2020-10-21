const express = require('express');
const app = express();
const morgan = require('morgan');

const logger = require('./middleware/logger');
const courses = require('./routes/courses');

app.use(express.json());

app.use(logger)

app.use(morgan('tiny'));

app.use('/', express.static('public/'))

app.use('/api/courses', courses);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sever is listening on port: ${port}`));