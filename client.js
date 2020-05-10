let server;
let lastMessage;

function configure() {
  server = require('./server');
  configureListener();
  server.listen();
}

function configureListener() {
  server.socketEvent.on('new', (socketId) => {
    sendLastMessage(socketId);
  });
}

function sendLastMessage(socketId) {
  server.sendMessageSingle(socketId, lastMessage);
}

function log(value) {
  lastMessage = value;
  server.sendMessage(value);
}

module.exports = {configure, log};
