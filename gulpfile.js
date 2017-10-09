/**
 * Created by Serenity on 2017/10/9.
 */
var gulp = require('gulp');
 var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
gulp.task('mini-js', function () {
    gulp.src('./js/*.js')
        .pipe(concat('./js/*.js'))
        .pipe(uglify())
        .pipe(rename('fn.min.js'))
        .pipe(gulp.dest('./js/fn.min.js'))
})