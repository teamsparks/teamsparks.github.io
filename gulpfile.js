//Package Imports
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    myth = require('gulp-myth'),
    changed = require('gulp-changed');

//run 'gulp css'
gulp.task('css', function() {
    return gulp.src('src/css/*.css')
    .pipe(autoprefixer({
        browsers: ['> 1%', 'IE 6', 'IE 7', 'IE 8', 'IE 9', 'IE 10'],
        cascade: false
    }))
    .pipe(myth())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/css'));
});


// run 'gulp watch'
gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css']);
});

// Default gulp task that runs when you 'gulp'
gulp.task('default', ['css']);
