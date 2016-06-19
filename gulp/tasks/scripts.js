'use strict';
const gulp = require('gulp');
const when = require('gulp-if');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const newer = require('gulp-newer');
const rename = require('gulp-rename');
const size = require('gulp-size');
const sourcemaps = require('gulp-sourcemaps');
const gzip = require('gulp-gzip');
const rev = require('gulp-rev');
const argv = require('yargs').argv;

// 'gulp scripts' -- creates a index.js file from your JavaScript files and
// creates a Sourcemap for it
// 'gulp scripts --prod' -- creates a index.js file from your JavaScript files,
// minifies, gzips and cache busts it. Does not create a Sourcemap
gulp.task('scripts', () =>
  // NOTE: The order here is important since it's concatenated in order from
  // top to bottom, so you want vendor scripts etc on top
  gulp.src([
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.extensions.js',
    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.date.extensions.js',
    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.numeric.extensions.js',
    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.phone.extensions.js',
    'bower_components/jquery.inputmask/dist/inputmask/jquery.inputmask.regex.extensions.js',
    'bower_components/select2/select2.js',
    'bower_components/nouislider/distribute/jquery.nouislider.all.min.js',
    'src/front/vendor/jquery-ui-1.11.1.custom/jquery-ui.js',
    'src/front/scripts/appDemo.js',
    'src/front/scripts/main.js'
  ])
    .pipe(newer('.tmp/assets/javascript/index.js', {dest: '.tmp/assets/javascript', ext: '.js'}))
    .pipe(when(!argv.prod, sourcemaps.init()))
    //.pipe(babel({
    //  presets: ['es2015']
    //}))
    .pipe(concat('index.js'))
    .pipe(size({
      showFiles: true
    }))
    .pipe(when(argv.prod, rename({suffix: '.min'})))
    .pipe(when(argv.prod, when('*.js', uglify({preserveComments: 'some'}))))
    .pipe(when(argv.prod, size({
      showFiles: true
    })))
    .pipe(when(argv.prod, rev()))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, gulp.dest('.tmp/assets/javascript')))
    .pipe(when(argv.prod, when('*.js', gzip({append: true}))))
    .pipe(when(argv.prod, size({
      gzip: true,
      showFiles: true
    })))
    .pipe(gulp.dest('.tmp/assets/javascript'))
);
