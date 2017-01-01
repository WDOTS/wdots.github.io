const shell = require('shelljs');

module.exports = function clean() {
    shell.rm('-rf', 'build');
    shell.rm('-f', 'index.html');
};
