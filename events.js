var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('error', function(message){
    console.log('ERR: ' + message);
});

logger.emit('error', 'Spiled Milk');
logger.emit('error', 'Eggs Cracked');
