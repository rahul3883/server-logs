const browser = require('../client');

browser.configure();

const message = 'sample message';

browser.log(message);

(async () => {
    const message = await doSomething();
    browser.log(message);
})();

async function doSomething(delay = 5) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('async message');
        }, delay * 1000);
    });
}
