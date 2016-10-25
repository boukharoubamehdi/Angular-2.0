var gulp = require('gulp');
var gulpif = require('gulp-if');
var args = require('yargs').argv;


var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var src = 'src/';
var dist = 'dist/';
var tsconfig = typescript.createProject('tsconfig.json');

//initialize sourcemaps
//before compiling typescript
//and after compling we write them.
//take all the compiled files and copy them it the destination (it's my dist folder)

gulp.task('build-ts', function () {
    return gulp.src(src + 'app/**/*.ts')
        .pipe(gulpif(!args.production, sourcemaps.init()))
        .pipe(typescript(tsconfig))
        .pipe(gulpif(!args.production, sourcemaps.write()))
        .pipe(gulp.dest(dist + 'app'));
});

//this task will be responsable for copying all my htlm and css files (my templates and styles files)
gulp.task('build-copy', function () {
    gulp.src([
        src + 'app/**/*.html',
        src + 'app/**/*.htm',
        src + 'app/**/*.css'])
        .pipe(gulp.dest(dist + 'app'));

    gulp.src([
        src + 'index.html'])
        .pipe(gulp.dest(dist));

    return gulp.src([src + 'systemjs.config.js'])
        .pipe(gulp.dest(dist));
});

//this task should clean my dist folder.
//because if i use a dev workFlow i don't want to have the bundle from the production workFlow
//same logic if i use the production workFlow
gulp.task('clean', function () {
    del([
        dist + '/**/*.html',
        dist + '/**/*.htm',
        dist + '/**/*.css', dist + 'app']);
});

//it's responsable for copying all my production dependencies from my node_modules folder into the dist folder.
gulp.task('vendor', function () {
    del([dist + 'vendor/**/*']);

    gulp.src(['node_modules/@angular/**'])
        .pipe(gulp.dest(dist + 'vendor/@angular'));

    gulp.src(['node_modules/es6-shim/**'])
        .pipe(gulp.dest(dist + 'vendor/es6-shim/'));

    gulp.src(['node_modules/reflect-metadata/**'])
        .pipe(gulp.dest(dist + 'vendor/reflect-metadata/'));

    gulp.src(['node_modules/rxjs/**'])
        .pipe(gulp.dest(dist + 'vendor/rxjs/'));

    gulp.src(['node_modules/systemjs/**'])
        .pipe(gulp.dest(dist + 'vendor/systemjs/'));

    return gulp.src(['node_modules/zone.js/**'])
        .pipe(gulp.dest(dist + 'vendor/zone.js/'));

});

//this should be runnable during development to
// create a watcher to automatically execute certain tasks when i change the typescript file and so on.
//whenever something changes i will execute guild-ts

gulp.task('watch', function () {
    gulp.watch(src + '**/*.ts', ['build-ts']);
    gulp.watch(src + '**/*.{html,htm,css}', ['build-copy']);
});

gulp.task('build', ['build-ts', 'build-copy']);
//this is for dev mode.
gulp.task('default', ['build', 'watch']);


