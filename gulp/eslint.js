import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gulpIf from 'gulp-if';
import yargs from 'yargs';

const args = yargs.argv;

/**
 *  To fix some eslint issues: gulp eslint --fix
 */
gulp.task('eslint', () => {
  const isFixed = file => args.fix && file.eslint && file.eslint.fixed;

  return gulp.src([
    // 'gulp/**/*.js',
    // 'gulpfile.babel.js',
    'src/**/*.js',
    'webpack/*.js',
  ], { base: './' })
    .pipe(eslint({ fix: args.fix }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./')));
});
