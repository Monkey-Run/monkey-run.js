var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var package = require('./package.json');
var exec = require('child_process').exec;
var path = require('path');
var replace = require('gulp-replace');

gulp.task('clean', function (cb) {
    rimraf('docs', cb);
});

gulp.task('concat-js', function () {
    return gulp.src(['src/js/core.js', 'src/js/*.js'])
        .pipe(replace('@VERSION@', package.version))
        .pipe(concat('dist/js/monkey-run.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('min-js', ['concat-js'], function () {
    return gulp.src('dist/js/monkey-run.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('documentation', ['concat-js', 'clean'], function () {
    exec(
        'node ./node_modules/documentation/bin/documentation.js build ' + './src/js' +
        ' -f html -o ./docs --github --name ' + package.name, function (err) {
            if (err) {
                console.log(err);
            }
            exec(
                'node ./node_modules/documentation/bin/documentation.js build ' + './src/js' +
                ' -f md -o ./docs/api.md --github --name ' + package.name, function (err) {
                    if (err) {
                        console.log(err);
                    }
                }
            );
        }
    );

});

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['min-js', 'documentation']);
});

gulp.task('default', ['concat-js', 'min-js', 'documentation', 'watch']);
