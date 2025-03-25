module.exports = function () {
  $.gulp.task('purgecss', () => {
    return $.gulp.src('build/**/*.css')
        .pipe($.purgecss({
          content: ['src/**/*.html']
        }))
        .pipe($.gulp.dest('build'))
  })
};
