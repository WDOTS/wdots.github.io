const imagemin = require('gulp-imagemin');
const gulp = require('gulp');

module.exports = function images() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
};
