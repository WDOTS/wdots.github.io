const gulp = require('gulp');
const shell = require('shelljs');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);
gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('css/*.css', ['build:css']);
    gulp.watch('js/*.js', ['clean', 'build:js']);
});
gulp.task('build', ['clean', 'build:js']);
gulp.task('clean', () => {
    shell.rm('-rf', 'build');
});
gulp.task('build:js', () => {
    gulp.src('js/*.js')
        .pipe(sourcemaps.init())
            .pipe(uglify({ mangle: false }))
            .pipe(concat('main.js'))
        .pipe(sourcemaps.write('maps/'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('build/js/'));
});
gulp.task('build:css', () => {
    gulp.src('css/*.css')
        .pipe(browserSync.stream());
});
