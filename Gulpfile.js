const gulp = require('gulp');
const runSequence = require('run-sequence');
const serve = require('./tools/tasks/serve');
const clean = require('./tools/tasks/clean');
const js = require('./tools/tasks/js');
const css = require('./tools/tasks/css');
const html = require('./tools/tasks/html');
const fonts = require('./tools/tasks/fonts');
const images = require('./tools/tasks/images');
const manifest = require('./tools/tasks/manifest');
const generateServiceWorker = require('./tools/tasks/generate-service-worker');

gulp.task('default', function (done) {
    runSequence('build', 'serve', done);
});
gulp.task('build', function (done) {
    runSequence(
        'clean',
        'build:js',
        'build:css',
        'build:fonts',
        'build:images',
        'generate-service-worker',
        'build:manifest',
        'build:html',
        done
    );
});
gulp.task('serve', serve);
gulp.task('clean', clean);
gulp.task('build:js', js);
gulp.task('build:css', css);
gulp.task('build:fonts', fonts);
gulp.task('build:manifest', manifest);
gulp.task('build:html', html);
gulp.task('build:images', images);
gulp.task('generate-service-worker', generateServiceWorker);
