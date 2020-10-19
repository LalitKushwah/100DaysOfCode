const logger = require('./logger');
const instance = new logger();

instance.on('myCustomEvent', data => console.log(data.message));

instance.log('Message from app.js');
