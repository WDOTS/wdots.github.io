const gulp = require('gulp');
const serve = require('./tools/tasks/serve');
const clean = require('./tools/tasks/clean');
const js = require('./tools/tasks/js');
const css = require('./tools/tasks/css');
const html = require('./tools/tasks/html');
const fonts = require('./tools/tasks/fonts');
const images = require('./tools/tasks/images');

gulp.task('default', ['serve']);
gulp.task('serve', ['build'], serve);
gulp.task('build', ['clean', 'build:js', 'build:css', 'build:fonts', 'build:images'], html);
gulp.task('clean', clean);
gulp.task('build:js', js);
gulp.task('build:css', css);
gulp.task('build:fonts', fonts);
gulp.task('build:images', images);
