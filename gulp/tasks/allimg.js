module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('src/img/**/*.{jpg,png,svg}')
        .pipe($.gulp.dest('build/img'));
  });
};
