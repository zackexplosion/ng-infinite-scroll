var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    compass = require('gulp-compass')
 
gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      css: 'css',
      sass: 'sass'
    }))
    // .pipe(gulp.dest('app/assets/temp'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('reload', function () {
  connect.reload();
});

gulp.task('watch', function () {
  gulp.watch(['./sass/*.scss'], ['compass']);
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['js/*'], ['reload']);
});


gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);