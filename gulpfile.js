var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var del = require('del');

gulp.task('sass', function() {
    return gulp.src('app/content/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/content/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/content/scss/**/*.scss', ['sass']);
});
gulp.task('clean', function() {
    del('dist');
});
gulp.task('build', ['clean', 'sass'], function(){
    var assets = useref.assets();

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulpIf('*.js', uglify().on('error', gutil.log)))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

