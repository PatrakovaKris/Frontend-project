var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('compile-less', function(){
    return gulp.src('styles/style.less')
    .pipe(less())
    .pipe(gulp.dest('stylesss'));
});

gulp.task('default', ['compile-less']);