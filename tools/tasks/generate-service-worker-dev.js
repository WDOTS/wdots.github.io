const writeServiceWorkerFile = require('./write-service-worker-file');

module.exports = function (callback) {
    writeServiceWorkerFile('build', true, callback);
};
