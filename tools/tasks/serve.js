const gulp = require('gulp');
const isDev = require('./isDev');
const browserSync = require('./browserSync');

module.exports = function serve() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        https: !isDev()
    });
    gulp.watch('src/css/**/*.scss', ['build:css']);
    gulp.watch('src/js/*.js', ['build:js']);
    gulp.watch('src/templates/*.html', ['build:html']);
};
