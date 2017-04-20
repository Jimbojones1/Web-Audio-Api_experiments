var gulp     = require('gulp');
var source   = require('vinyl-source-stream')
var util     = require('gulp-util');
var str      = require('string-to-stream');
var babelify = require('babelify');
var less     = require('gulp-less');


// WRite a task that creates a component file,
// and creates the skeleton for an es6 react component

gulp.task('watch', function(){
  gulp.watch(['./public/stylesheets/*.less'], ['compile-less'])
  // gulp.watch("./server/views/*.html").on('change', browserSync.reload);
})

gulp.task('compile-less', function(){
  gulp.src('./public/stylesheets/main.less')
  .pipe(less())
  .pipe(gulp.dest('./public/stylesheets'));
})


gulp.task('default', ['compile-less','watch'])











