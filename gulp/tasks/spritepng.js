module.exports = function () {
    $.gulp.task('sprite', function () {
        let spriteData = $.gulp.src('src/img/icon-*.png').pipe($.gp.spritesmith({
            imgName: 'src/img/sprite.png',
            cssName: 'src/scss/base/_sprite.scss',
            padding: 10
        }));

        return spriteData.pipe($.gulp.dest('./'));
    });
};
