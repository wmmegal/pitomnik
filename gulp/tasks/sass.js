module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('./src/scss/app.scss')
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.sass())
        .pipe($.gcmq())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.csso())
        .pipe($.gp.rename('style.css'))
        // .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};
