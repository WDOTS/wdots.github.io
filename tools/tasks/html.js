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
            jquery: 'build/js/vendor/jquery-3.1.0.min.js',
            jqueryEasing: 'build/js/vendor/jquery.easing.min.js',
            jqueryVisible: 'build/js/vendor/jquery.visible.min.js',
            bootstrap: 'build/css/vendor/bootstrap.min.css',
            addToCalendarCss: 'build/css/vendor/atc-base.css',
            html5Shiv: 'build/js/vendor/html5shiv.min.js',
            respond: 'build/js/vendor/respond.min.js',
            addToCalendarJs: 'build/js/vendor/atc.min.js'
        };
    } else {
        data.vendorPaths = {
            jquery: '//unpkg.com/jquery@3.1.0/dist/jquery.min.js',
            jqueryEasing: '//unpkg.com/jquery-easing@0.0.1/dist/jquery.easing.1.3.umd.min.js',
            jqueryVisible: '//cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.min.js',
            bootstrap: '//unpkg.com/bootstrap@3.3.6/dist/css/bootstrap.min.css',
            addToCalendarCss: '//addtocalendar.com/atc/1.5/atc-base.css',
            html5Shiv: '//unpkg.com/html5shiv@3.7.3/dist/html5shiv.min.js',
            respond: '//unpkg.com/respond.js@1.4.2/dest/respond.min.js',
            addToCalendarJs: '//addtocalendar.com/atc/1.5/atc.min.js'
        };
    }
    gulp.src('src/templates/index.html')
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
