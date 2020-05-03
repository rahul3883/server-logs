# Server logs

View Node.js server logs in browser.

## Install

```shell script
npm install server-logs
```

## Usage

#### Start the server
```javascript
const serverLogs = require('server-logs');
serverLogs.configure();
```

#### Log the message
```javascript
serverLogs.log('message');
```

## Samples

Sample files can be found in `/samples` directory.

## Notes

- The server runs on port 5000 by default.
- Once the server has started, the log will send a message to all connected clients using web sockets.
- A new client will get the last emitted message upon connecting.
