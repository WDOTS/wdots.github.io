const gulp = require('gulp');
const shell = require('shelljs');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const template = require('gulp-template');
const htmlmin = require('gulp-htmlmin');
const preprocess = require('gulp-preprocess');
const browserSync = require('browser-sync').create();

const isDev = function () {
    return process.env.NODE_ENV !== 'production';
};

gulp.task('default', ['serve']);
gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: './'
        },
        https: !isDev()
    });
    gulp.watch('src/css/**/*.scss', ['build:css']);
    gulp.watch('src/js/*.js', ['build:js']);
    gulp.watch('src/templates/*.html', ['build:html']);
});
gulp.task('build', ['clean', 'build:html', 'build:js', 'build:css', 'build:fonts', 'build:images']);
gulp.task('clean', () => {
    shell.rm('-rf', 'build');
    shell.rm('-f', 'index.html');
});
gulp.task('build:js', () => {
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
});
gulp.task('build:css', () => {
    if (isDev()) {
        gulp.src(['src/css/vendor/*.css', 'src/css/vendor/*.map'])
            .pipe(gulp.dest('build/css/vendor'));
    }
    gulp.src('src/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(preprocess())
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('maps/'))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('build/css/'));
});
gulp.task('build:html', () => {
    const data = {
        assetPath: 'build'
    };

    if (isDev()) {
        data.vendorPaths = {
            jquery: 'build/js/vendor/jquery-3.1.0.min.js',
            jqueryEasing: 'build/js/vendor/jquery.easing.min.js',
            jqueryVisible: 'build/js/vendor/jquery.visible.min.js',
            bootstrap: 'build/css/vendor/bootstrap.min.css',
            addToCalendarCss: 'build/css/vendor/atc-style-blue.css',
            html5Shiv: 'build/js/vendor/html5shiv.min.js',
            respond: 'build/js/vendor/respond.min.js',
            addToCalendarJs: 'build/js/vendor/atc.min.js'
        };
    } else {
        data.vendorPaths = {
            jquery: '//code.jquery.com/jquery-3.1.0.min.js',
            jqueryEasing: '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js',
            jqueryVisible: '//cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.min.js',
            bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            addToCalendarCss: '//addtocalendar.com/atc/1.5/atc-style-blue.css',
            html5Shiv: '//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js',
            respond: '//oss.maxcdn.com/respond/1.4.2/respond.min.js',
            addToCalendarJs: '//addtocalendar.com/atc/1.5/atc.min.js'
        };
    }
    gulp.src('src/templates/index.html')
        .pipe(template(data))
        .pipe(htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./'));
});
gulp.task('build:fonts', () => {
    if (isDev()) {
        shell.mkdir('-p', 'build/fonts/');
        shell.cp('src/fonts/*.woff2', 'build/fonts/');
    }
});
gulp.task('build:images', () => {
    shell.mkdir('-p', 'build/img/');
    shell.cp('src/img/*', 'build/img/');
});
