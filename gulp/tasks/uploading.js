'use strict';
const gulp = require('gulp');
const gHpages = require('gulp-gh-pages');

// 'gulp deploy' -- pushes your dist folder to Github
gulp.task('upload', () => {
  return gulp.src('dist/**/*')
    .pipe(gHpages());
});
