module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'src/fonts/**/*.{woff,woff2}',
      'src/img/**',
    ], {
      base: './src/'
    })
      .pipe($.gulp.dest('build/', { prefix: 1 }));
  });
};
