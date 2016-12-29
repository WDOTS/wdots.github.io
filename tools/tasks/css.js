const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const preprocess = require('gulp-preprocess');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('./helpers/browserSync');
const isDev = require('./helpers/isDev');

module.exports = function css() {
    if (isDev()) {
        gulp.src(['src/css/vendor/*.css', 'src/css/vendor/*.map'])
            .pipe(gulp.dest('build/css/vendor'));
    }
    gulp.src('src/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(preprocess())
        .pipe(cleanCss())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('maps/'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('build/css/'));
};
