'use strict';
const gulp = require('gulp');
const when = require('gulp-if');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const size = require('gulp-size');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const gzip = require('gulp-gzip');
const rev = require('gulp-rev');
const argv = require('yargs').argv;
const reload = require('browser-sync').reload;

// 'gulp styles' -- creates a CSS file from your SASS, adds prefixes and
// creates a Sourcemap
// 'gulp styles --prod' -- creates a CSS file from your SASS, adds prefixes and
// then minwhenies, gzips and cache busts it. Does not create a Sourcemap
gulp.task('styles', () =>
  gulp.src(['src/bcbsm/sass/bcbsm.scss', 'src/front/styles/pattern-library.scss', 'src/front/styles/appDemo/appDemo.scss'])
    .pipe(when(!argv.prod, sourcemaps.init()))
    .pipe(sass({
      precision: 10
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: 'last 1 version'})
    ]))
    .pipe(size({
      showFiles: true
    }))
    .pipe(when(argv.prod, rename({suffix: '.min'})))
    .pipe(when(argv.prod, when('*.css', cssnano({autoprefixer: false}))))
    .pipe(when(argv.prod, size({
      showFiles: true
    })))
    .pipe(when(argv.prod, rev()))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, gulp.dest('.tmp/assets/stylesheets')))
    .pipe(when(argv.prod, reload({stream:true})))
    .pipe(when(argv.prod, when('*.css', gzip({append: true}))))
    .pipe(when(argv.prod, size({
      gzip: true,
      showFiles: true
    })))
    .pipe(gulp.dest('.tmp/assets/stylesheets'))
    .pipe(reload({stream:true}))
);
