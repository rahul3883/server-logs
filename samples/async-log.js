const client = require('../client');

client.configure();

const message = 'sample message';

client.log(message);

(async () => {
    const message = await doSomething();
    client.log(message);
})();

async function doSomething(delay = 5) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('async message');
        }, delay * 1000);
    });
}
