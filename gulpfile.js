global.$ = {
    gulp: require('gulp'),
    sass: require('gulp-sass')(require('sass')),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    gcmq: require('gulp-group-css-media-queries'),
    del: require('del'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    nunjucks: require('gulp-nunjucks-render'),
    purgecss: require('gulp-purgecss'),
    path: {
        config: require('./gulp/config'),
        js: './src/js/*.js',
    }
};

$.path.config.forEach(function (path) {
    require(path)();
});
