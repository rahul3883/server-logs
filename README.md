# Server logs

View Node.js server logs in browser.

## Install

```shell script
npm install @rahul171/server-logs
```

## Usage

#### Start the server
```javascript
const serverLogs = require('@rahul171/server-logs');
serverLogs.configure();
```

#### Log the message
```javascript
serverLogs.log('message');
```

## View logs in browser
Open [localhost:5000](http://localhost:5000) to see the logs.

You can also see the logs in browser console.

## Samples

Sample files can be found in [`/samples`](https://github.com/rahul3883/server-logs/tree/master/samples) directory.

## Notes

- The server runs on port 5000 by default.
- Once the server has started, the log will send a message to all connected clients using web sockets.
- A new client will get the last emitted message upon connecting.
