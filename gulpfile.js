var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  var error = false;
  gulp.
    src('./tests/**/*.js').
    pipe(mocha()).
    on('error', function() {
      console.log('Tests failed!');
      error = true;
    }).
    on('end', function() {
      if (!error) {
        console.log('Tests succeeded!');
      }
    });
});

gulp.task('watch', ['test'], function() {
  gulp.watch(['./**/*.js'], ['test']);
});
