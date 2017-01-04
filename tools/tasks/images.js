const shell = require('shelljs');

module.exports = function images(cb) {
    shell.mkdir('-p', 'build/img/');
    shell.cp('src/img/*', 'build/img/');
    cb();
};
