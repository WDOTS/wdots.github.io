const shell = require('shelljs');

module.exports = function images() {
    shell.mkdir('-p', 'build/img/');
    shell.cp('src/img/*', 'build/img/');
};
