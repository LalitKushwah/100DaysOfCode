const { EventEmitter } = require("events");

class Logger extends EventEmitter {
    log (message) {
        console.log(message);
        this.emit('myCustomEvent', { message: 'Welcome to NodeJS World'});
    }
}
module.exports  = Logger;
