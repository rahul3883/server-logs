const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    pingTimeout: 60000,
});

const events = require('events');
const socketEvent = new events.EventEmitter();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    socketEvent.emit('new', socket.id);
});

function listen(port = 5000) {
    server.listen(port, () => {
        console.log(`server started on ${port}`);
    });
}

function sendMessage(value) {
    io.emit('data', value);
}

function sendMessageSingle(socketId, value) {
    io.to(socketId).emit('data', value);
}

module.exports = { listen, socketEvent, sendMessage, sendMessageSingle };
