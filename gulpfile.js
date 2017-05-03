const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sassLint = require('gulp-sass-lint');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const paths = {
  'src': './src/sass/**/*.scss',
  'dist': './dist/css/'
}

const processors = [
  autoprefixer(),
  // cssnano()
];

gulp.task('style', function() {
  return gulp.src(paths.src)
    .pipe(plumber())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dist))
});
