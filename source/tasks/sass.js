var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function() {
  return gulp.src(basePaths.src+'/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(basePaths.dest+'/css'));
};
