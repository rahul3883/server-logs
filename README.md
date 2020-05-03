# Server logs

View Node.js server logs in browser.

## Configure

Run the below command to configure the server before starting.
```shell script
./configure
```

## Usage

#### Start the server
```javascript
const client = require('./client');
client.configure();
```

#### Log the message
```javascript
client.log('message');
```

## Samples

Sample files can be found in `/samples` directory.

## Notes

- The server runs on port 5000 by default.
- Once the server has started, the log will send a message to all connected clients using web sockets.
- A new client will get the last emitted message upon connecting.
