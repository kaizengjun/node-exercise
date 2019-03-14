const EventEmitter = require('events').EventEmitter;

const channel = new EventEmitter();
channel.on('join', () => {
  console.log('Welcome!');
});

channel.on('error', err => {
  console.log(`ERROR: ${err.message}`);
});

channel.emit('join');

channel.emit('error', new Error('Something is wrong.'));

console.log('after error')