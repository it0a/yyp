var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var del = require('del');

var srcDir = "app";
var libDir = "lib";

var paths = {
    stylesheets: [
        libDir + '/bootstrap/dist/css/bootstrap.min.css',
        srcDir + '/css/**/*.css'
    ],
    libraries: [
        libDir + '/angular/angular.js',
        libDir + '/angular-bootstrap/ui-bootstrap-tpls.js',
        libDir + '/angular-ui-router/release/angular-ui-router.js',
        libDir + '/firebase/firebase.js',
        libDir + '/angularfire/dist/angularfire.js',
        libDir + '/lodash/dist/lodash.js'
    ],
    scripts: [
        srcDir + '/**/*.module.js',
        srcDir + '/app.js',
        srcDir + '/**/*.js',
    ],
    markup: [
        srcDir + '/index.html',
        srcDir + '/**/*.html'
    ],
    fonts: [
        libDir + '/bootstrap/fonts/**/*.woff',
        libDir + '/bootstrap/fonts/**/*.ttf'
    ]
};

var libJS = "libs.js";
var appJS = "yyp.js";
var appCSS = "yyp.css";
var distDir = "dist";

gulp.task('bower', ['clean'], function () {
    return bower()
        .pipe(gulp.dest('lib'));
});
gulp.task('markup', ['clean'], function () {
    return gulp.src(paths.markup)
        .pipe(gulp.dest(distDir));
});
gulp.task('fonts', ['clean'], function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(distDir + '/fonts'));
});
gulp.task('clean', function (cb) {
    del(['build'], cb);
});
gulp.task('scripts', ['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(concat(appJS))
        .pipe(gulp.dest(distDir + "/js"));
});
gulp.task('libraries', ['bower'], function () {
    return gulp.src(paths.libraries)
        .pipe(uglify())
        .pipe(concat(libJS))
        .pipe(gulp.dest(distDir + "/js"));
});
gulp.task('stylesheets', ['clean'], function () {
    return gulp.src(paths.stylesheets)
        .pipe(concat(appCSS))
        .pipe(gulp.dest(distDir + "/css"));
});
gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.stylesheets, ['stylesheets']);
    gulp.watch(paths.markup, ['markup']);
});
gulp.task('default', ['watch', 'libraries', 'scripts', 'stylesheets', 'markup', 'fonts']);
