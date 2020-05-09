const path = require('path');

const sep = path.sep;

const socketIoHomePath = path.dirname(require.resolve('socket.io-client/package.json'));

const sourcePath = `${socketIoHomePath}${sep}dist`;
const destPath = `public${sep}socket`;

const fs = require('fs-extra');

try {
    fs.mkdirSync(destPath);
    fs.copySync(sourcePath, destPath);
} catch (err) {
    console.error(err);
}
