const gulp = require('gulp');
const template = require('gulp-template');
const htmlmin = require('gulp-htmlmin');
const inline = require('gulp-inline');
const browserSync = require('./helpers/browserSync');
const isDev = require('./helpers/isDev');

module.exports = function html() {
    const data = {
        assetPath: 'build',
        cssPath: isDev() ? 'build' : ''
    };

    if (isDev()) {
        data.vendorPaths = {
            zepto: 'build/js/vendor/zepto.min.js',
            addToCalendarJs: 'build/js/vendor/atc.min.js',
        };
    } else {
        data.vendorPaths = {
            zepto: '//unpkg.com/zepto@1.2.0/dist/zepto.min.js',
            addToCalendarJs: '//addtocalendar.com/atc/1.5/atc.min.js',
        };
    }

    return gulp.src('src/templates/index.html')
        .pipe(template(data))
        .pipe(inline({
            base: 'build/',
            disabledTypes: ['img', 'js', isDev() ? 'css' : ''],
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./'));
};
