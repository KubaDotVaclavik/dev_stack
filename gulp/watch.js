import gulp from 'gulp';
import watch from 'gulp-watch';
import eslint from 'gulp-eslint';

gulp.task('watch', () => {

    return watch('./src/*.js').on('change', (file) => {
        console.log('onchange');
        gulp
        .src(file)
        .pipe(eslint())
        .pipe(eslint.format())
    })
});
