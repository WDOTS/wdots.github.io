const { log } = require('gulp-util');
const swPrecache = require('sw-precache');
const { name } = require('../../package.json');

module.exports = function writeServiceWorkerFile(rootDir, handleFetch, callback) {
    const config = {
        cacheId: name,
        handleFetch,
        logger: log,
        staticFileGlobs: [
            `${rootDir}/css/**.css`,
            `${rootDir}/images/**.*`,
            `${rootDir}/js/**.js`
        ],
        stripPrefix: `${rootDir}/`,
        verbose: true
    };

    swPrecache.write('service-worker.js', config, callback);
};
