const { log } = require('gulp-util');
const swPrecache = require('sw-precache');
const { name } = require('../../../package.json');

module.exports = function writeServiceWorkerFile(handleFetch, callback) {
    const config = {
        cacheId: name,
        handleFetch,
        logger: log,
        staticFileGlobs: [
            'build/img/**.*',
            'build/js/**.js'
        ],
        verbose: true
    };

    swPrecache.write('service-worker.js', config, callback);
};
