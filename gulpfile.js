var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('concat-js', function () {
    return gulp.src(['src/js/core.js', 'src/js/*.js'])
        .pipe(concat('dist/js/monkey-run.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('min-js', ['concat-js'], function () {
    return gulp.src('dist/js/monkey-run.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['min-js']);
});

gulp.task('default', ['concat-js', 'min-js', 'watch']);
