const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('css/*.css', ['build:css']);
  gulp.watch('js/*.js', ['build:js']);
});
gulp.task('build:js', () => {
  gulp.src('js/*.js')
    .pipe(browserSync.stream());
});
gulp.task('build:css', () => {
  gulp.src('css/*.css')
    .pipe(browserSync.stream());
});
