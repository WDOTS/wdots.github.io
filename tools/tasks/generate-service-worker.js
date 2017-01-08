const writeServiceWorkerFile = require('./helpers/write-service-worker-file');
const isDev = require('./helpers/isDev');

module.exports = function (callback) {
    writeServiceWorkerFile(!isDev(), callback);
};
