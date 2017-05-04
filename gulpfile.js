var gulp = require('gulp'),
  connect = require('gulp-connect'),
  gulpSass = require('gulp-sass'),
  autoprefixer = require('autoprefixer'),
  postcss = require('gulp-postcss');
 
gulp.task('webserver', function() {
  connect.server({livereload: true});
});

gulp.task('sass', function () {
    gulp.src('styles/scss/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass()) 	        // 編譯 Scss
        .pipe(gulp.dest('styles/css'))  // 指定編譯後的 css 檔案目錄
        .pipe(connect.reload());
});

gulp.task('postcss', function() {
    var processors = [
      autoprefixer({browsers: ['last 5 version']})
    ];
    return gulp.src('styles/scss/**/*.scss').
      pipe(gulpSass(
      {outputStyle: 'expanded'}
    ).on('error', gulpSass.logError))
    .pipe(postcss(processors))                       // 將 PostCSS 插入流程
    .pipe(gulp.dest('./styles/css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('*.html')
      .pipe(connect.reload());
});
 
gulp.task('watch', function(){
  // gulp.watch('styles/scss/*.scss', ['sass', 'postcss']);
  gulp.watch('styles/scss/**/*.scss', ['sass', 'postcss']);
	gulp.watch('*.html', ['html']);
  gulp.watch('js/*.js', ['script'])
});

gulp.task('default', ['webserver','sass','postcss', 'watch']);