const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('./browserSync');
const isDev = require('./isDev');

module.exports = function js() {
    if (isDev()) {
        gulp.src('src/js/vendor/*.js')
            .pipe(gulp.dest('build/js/vendor'));
    }
    gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify({ mangle: false }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('maps/'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('build/js/'));
};
