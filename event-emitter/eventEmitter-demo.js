const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('Task1', () => {
  console.log('Yash');
});

eventEmitter.on('Task2', () => {
  console.log('Vashnavi');
});

eventEmitter.emit('Task1');
