var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

module.exports = function() {
  return gulp.src([
      basePaths.src+'/html/*.html',
      basePaths.src+'/js/templates/*.html'
    ])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(basePaths.root))
};
