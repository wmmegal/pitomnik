module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            server: 'build/'
        });

        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/*.html', $.gulp.series('html', 'render'));
        $.gulp.watch('src/templates/*.html', $.gulp.series('render'));
        $.gulp.watch('src/js/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/img/icon-*.png', $.gulp.series('sprite'));
        $.gulp.watch('src/img/*.{png,jpg,svg}', $.gulp.series('allimg'));
    });
};
