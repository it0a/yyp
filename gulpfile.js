var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var del = require('del');

var paths = {
    stylesheets: [
        'src/css/yyt.css'
    ],
    libraries: [
        'lib/angular/angular.js',
        'lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'lib/angular/lodash.js'
    ],
    scripts: [
        'src/app.js',
        'src/**/*.js'
    ]
};

var libJS = "libs.js";
var appJS = "yyt.js";
var appCSS = "yys.css";
var distDir = "dist";

gulp.task('bower', ['clean'], function () {
    return bower()
        .pipe(gulp.dest('lib'));
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
});
gulp.task('default', ['watch', 'libraries', 'scripts', 'stylesheets']);
