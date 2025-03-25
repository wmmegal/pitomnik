module.exports = function () {
    $.gulp.task('render', function () {
        return $.gulp.src('src/*.html')
            .pipe($.nunjucks({
                path: ['src/templates/'] // String or Array
            }))
            .pipe($.gulp.dest('build'))
            .pipe($.browserSync.reload({stream: true, reloadDebounce: 100 }))
    });

};
