const gulp = require('gulp');
const template = require('gulp-template');

module.exports = function manifest() {
    return gulp.src('src/manifest.json')
        .pipe(template({
            assetPath: 'build'
        }))
        .pipe(gulp.dest('./'));
};
