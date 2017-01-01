const shell = require('shelljs');
const isDev = require('./helpers/isDev');

module.exports = function fonts() {
    if (isDev()) {
        shell.mkdir('-p', 'build/fonts/');
        shell.cp('src/fonts/*.woff2', 'build/fonts/');
    }
};
