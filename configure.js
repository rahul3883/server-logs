const path = require('path');

const socketIoHomePath = path.dirname(require.resolve('socket.io-client/package.json'));

const sourcePath = `${socketIoHomePath}/dist`;
const destPath = 'public/socket';

const fs = require('fs-extra');

try {
    fs.mkdirSync(destPath);
    fs.copySync(sourcePath, destPath);
} catch (err) {
    console.error(err);
}
