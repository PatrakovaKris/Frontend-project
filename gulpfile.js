var gulp = require('gulp');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var react = require('gulp-react');
var autoprefixer = require('gulp-autoprefixer');
var yargs = require('yargs');

gulp.task('images', function() {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});
gulp.task('fonts', function() {
    gulp.src('fonts/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/fonts/'));
});
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('compile-less', function(){
    return gulp.src('styles/style.less')
        //.pipe(watchLess('styles/style.less'))
        .pipe(less())
        .pipe(gulp.dest('dist/styles/'));
});
gulp.task('jsx', function() {
    return gulp.src('js/**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'));
});
//gulp.task('test', function () {
//    return gulp.src('js/**/*.jsx')
//        .pipe(sourcemaps.init())
//        .pipe(react())
//        .pipe(concat('app.js'))
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest('dist/js/'));
//});
gulp.task('js', function() {
    return gulp.src('js/**/*.js')
        .pipe(gulp.dest('dist/js/'));
});

/*webserver*/
gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            fallback: 'MusicStore.html',
            livereload: true,
            directoryListing: false,
            open: true
        }));
});
/*watch*/
gulp.task('watch', function(){
    gulp.watch('js/**/*.js',['js']);
    gulp.watch('js/**/*.{js,jsx}',['jsx']);
    gulp.watch('*.html',['html']);
    gulp.watch('styles/**/*.{less,css}',['compile-less']);
});

gulp.task('default', ['jsx','fonts','js','images','html','compile-less','webserver','watch']);