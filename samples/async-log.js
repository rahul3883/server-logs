const serverLogs = require('@rahul171/server-logs');

serverLogs.configure();

const message = 'sample message';

serverLogs.log(message);

(async () => {
  const message = await doSomething();
  serverLogs.log(message);
})();

async function doSomething(delay = 5) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('async message');
    }, delay * 1000);
  });
}
