var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['> 0.25%', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
