var minifycss = require('gulp-minify-css');
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');
var notify = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(plumber())
        .pipe(sass()
            .on("error", notify.onError({
                title: "Sass Error",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
});
