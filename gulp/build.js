import gulp from 'gulp';
import webpackBuild from '../webpack/build';

gulp.task('build', done => webpackBuild(done));