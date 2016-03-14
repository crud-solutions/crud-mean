var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');

module.exports = function() {
  return gulp.src([
      basePaths.node+'/angular/angular.js',
      basePaths.node+'/angular-route/angular-route.js',
      basePaths.src+'/js/app.js',
      basePaths.src+'/js/crud/crudService.js',
      basePaths.src+'/js/crud/crudController.js'
    ])
    .pipe(uglify('scripts.min.js', {output: {beautify: true}}))
    .pipe(gulp.dest(basePaths.dest+'/js/'));
};
