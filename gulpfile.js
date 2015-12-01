var gulp = require('gulp');
//var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var yargs = require('yargs');

//gulp.task('compile-less', function(){
//    return gulp.src('styles/style.less')
//    .pipe(less())
//    .pipe(gulp.dest('stylesss'));
//});

gulp.task('js', function() {
    return gulp.src('js/**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js/'));
});

gulp.task('default', ['js']);