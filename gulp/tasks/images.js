module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src('build/img/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/img'));
  });
};